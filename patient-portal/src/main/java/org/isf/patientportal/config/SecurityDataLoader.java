/*
 * Open Hospital (www.open-hospital.org)
 * Copyright © 2006-2023 Informatici Senza Frontiere (info@informaticisenzafrontiere.org)
 *
 * Open Hospital is a free and open source software for healthcare data management.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * https://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
package org.isf.patientportal.config;

import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

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

		System.out.println(passwordEncoder.encode("hospadmin2023"));
		System.out.println(passwordEncoder.encode("doctor2023"));
		System.out.println(passwordEncoder.encode("justin2023"));
		System.out.println(passwordEncoder.encode("anthon2023"));
		System.out.println(passwordEncoder.encode("veronique2023"));
		System.out.println(passwordEncoder.encode("cypher2023"));
		System.out.println(passwordEncoder.encode("serena2023"));
		System.out.println(passwordEncoder.encode("bardsley2023"));
		System.out.println(passwordEncoder.encode("graney2023"));
		System.out.println(passwordEncoder.encode("ackman2023"));
		System.out.println(passwordEncoder.encode("pohlman2023"));
		System.out.println(passwordEncoder.encode("jeana2023"));
		System.out.println(passwordEncoder.encode("abramo2023"));

		if (alreadySetup)
			return;
		Privilege readPrivilege = createPrivilegeIfNotFound("READ_PRIVILEGE");
		Privilege writePrivilege = createPrivilegeIfNotFound("WRITE_PRIVILEGE");

		Privilege ownReadPrivilege = createPrivilegeIfNotFound("OWN_READ_PRIVILEGE");

		Privilege familyReadPrivilege = createPrivilegeIfNotFound("FAMILY_READ_PRIVILEGE");

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