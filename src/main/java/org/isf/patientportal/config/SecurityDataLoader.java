package org.isf.patientportal.config;

import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.isf.patientportal.model.patient.Patient;
import org.isf.patientportal.model.user.Privilege;
import org.isf.patientportal.model.user.PrivilegeRepository;
import org.isf.patientportal.model.user.Role;
import org.isf.patientportal.model.user.RoleRepository;
import org.isf.patientportal.model.user.User;
import org.isf.patientportal.model.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class SecurityDataLoader implements
  ApplicationListener<ContextRefreshedEvent> {

    boolean alreadySetup = false;

    @Autowired
    private UserRepository userRepository;
 
    @Autowired
    private RoleRepository roleRepository;
 
    @Autowired
    private PrivilegeRepository privilegeRepository;
 
    @Autowired
    private PasswordEncoder passwordEncoder;
 
    @Override
    @Transactional
    public void onApplicationEvent(ContextRefreshedEvent event) {
 
        if (alreadySetup)
            return;
        Privilege readPrivilege
          = createPrivilegeIfNotFound("READ_PRIVILEGE");
        Privilege writePrivilege
          = createPrivilegeIfNotFound("WRITE_PRIVILEGE");
 
        Privilege ownReadPrivilege
          = createPrivilegeIfNotFound("OWN_READ_PRIVILEGE");
 
        Privilege familyReadPrivilege
          = createPrivilegeIfNotFound("FAMILY_READ_PRIVILEGE");
 
        List<Privilege> adminPrivileges = Arrays.asList(
          readPrivilege, writePrivilege);
        List<Privilege> familyManagerPrivileges = Arrays.asList(
            ownReadPrivilege, familyReadPrivilege);
        List<Privilege> userManagerPrivileges = Arrays.asList(
            ownReadPrivilege);
                
        createRoleIfNotFound("ROLE_ADMIN", adminPrivileges);
        createRoleIfNotFound("ROLE_FAMILYMANAGER", familyManagerPrivileges);
        createRoleIfNotFound("ROLE_USER", userManagerPrivileges);

        if (userRepository.findByEmail("admin@patientportal.isf.org") == null) {
            
            Role adminRole = roleRepository.findByName("ROLE_ADMIN");

            User user = new User();
            user.setPassword(passwordEncoder.encode("admin"));
            user.setEmail("admin@patientportal.isf.org");
            user.setUsername("admin@patientportal.isf.org");
            Set<Role> roles = new HashSet<Role>();
            roles.add(adminRole);
            user.setRoles(roles);
            user.setActive(true);
            userRepository.save(user);
            Patient patient = new Patient();
            patient.setFirstName("Admin");
            patient.setSecondName("Admin");
            patient.setUser(user);
        }

        
        alreadySetup = true;
    }

    @Transactional
    Privilege createPrivilegeIfNotFound(String name) {
 
        Privilege privilege = privilegeRepository.findByName(name);
        if (privilege == null) {
            privilege = new Privilege(name);
            privilegeRepository.save(privilege);
        }
        return privilege;
    }

    @Transactional
    Role createRoleIfNotFound(
      String name, Collection<Privilege> privileges) {
 
        Role role = roleRepository.findByName(name);
        if (role == null) {
            role = new Role(name);
            role.setPrivileges(privileges);
            roleRepository.save(role);
        }
        return role;
    }
}