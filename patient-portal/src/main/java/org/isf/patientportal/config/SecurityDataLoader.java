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

		if (alreadySetup)
			return;

		Privilege readPatientPrivilege = createPrivilegeIfNotFound("patient.read");
		Privilege writePatientPrivilege = createPrivilegeIfNotFound("patient.write");
		Privilege updatePatientPrivilege = createPrivilegeIfNotFound("patient.update");
		Privilege deletePatientPrivilege = createPrivilegeIfNotFound("patient.delete");

		Privilege readPatientRecordPrivilege = createPrivilegeIfNotFound("patientrecord.read");
		Privilege writePatientRecordPrivilege = createPrivilegeIfNotFound("patientrecord.write");
		Privilege updatePatientRecordPrivilege = createPrivilegeIfNotFound("patientrecord.update");
		Privilege deletePatientRecordPrivilege = createPrivilegeIfNotFound("patientrecord.delete");

		Privilege readRecordTypePrivilege = createPrivilegeIfNotFound("recordtype.read");
		Privilege writeRecordTypePrivilege = createPrivilegeIfNotFound("recordtype.write");
		Privilege updateRecordTypePrivilege = createPrivilegeIfNotFound("recordtype.update");
		Privilege deleteRecordTypePrivilege = createPrivilegeIfNotFound("recordtype.delete");

		Privilege readUserPrivilege = createPrivilegeIfNotFound("user.read");
		Privilege writeUserPrivilege = createPrivilegeIfNotFound("user.write");
		Privilege updateUserPrivilege = createPrivilegeIfNotFound("user.update");
		Privilege deleteUserPrivilege = createPrivilegeIfNotFound("user.delete");

		Privilege readHospitalEventPrivilege = createPrivilegeIfNotFound("hospitalevent.read");
		Privilege writeHospitalEventPrivilege = createPrivilegeIfNotFound("hospitalevent.write");
		Privilege updateHospitalEventPrivilege = createPrivilegeIfNotFound("hospitalevent.update");
		Privilege deleteHospitalEventPrivilege = createPrivilegeIfNotFound("hospitalevent.delete");

		List<Privilege> adminPrivileges = Arrays.asList(readPatientPrivilege, writePatientPrivilege, updatePatientPrivilege, deletePatientPrivilege,
						readPatientRecordPrivilege, writePatientRecordPrivilege, updatePatientRecordPrivilege, deletePatientRecordPrivilege,
						readRecordTypePrivilege, writeRecordTypePrivilege, updateRecordTypePrivilege, deleteRecordTypePrivilege,
						readUserPrivilege, writeUserPrivilege, updateUserPrivilege, deleteUserPrivilege,
						readHospitalEventPrivilege, writeHospitalEventPrivilege, updateHospitalEventPrivilege, deleteHospitalEventPrivilege);
		List<Privilege> doctorPrivileges = Arrays.asList(readPatientPrivilege, readPatientRecordPrivilege, readRecordTypePrivilege, readUserPrivilege,
						readHospitalEventPrivilege);
		List<Privilege> patientPrivileges = Arrays.asList(readPatientPrivilege, updatePatientPrivilege,
						readPatientRecordPrivilege, writePatientRecordPrivilege, updatePatientRecordPrivilege, deletePatientRecordPrivilege,
						readRecordTypePrivilege,
						readUserPrivilege, updateUserPrivilege,
						readHospitalEventPrivilege);

		createRoleIfNotFound("ROLE_ADMIN", adminPrivileges);
		createRoleIfNotFound("ROLE_DOCTOR", doctorPrivileges);
		createRoleIfNotFound("ROLE_PATIENT", patientPrivileges);

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