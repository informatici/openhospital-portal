/*
 * Open Hospital (www.open-hospital.org)
 * Copyright © 2006-2022 Informatici Senza Frontiere (info@informaticisenzafrontiere.org)
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
package org.isf.patientportal.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

import org.isf.patientportal.model.user.Privilege;
import org.isf.patientportal.model.user.Role;
import org.isf.patientportal.model.user.User;
import org.isf.patientportal.model.user.UserRepository;


@Slf4j
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	protected UserRepository repository;
	
	protected User user;

	@Override
	public UserDetailsImpl loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<User> optUser;
		try {
			optUser = repository.findByUsername(username);
		} catch (UsernameNotFoundException e) {
			log.error("User login received an unexpected OHServiceException", e);
			throw new UsernameNotFoundException(username + " authentication failed", e);
		}
		if (!optUser.isPresent()) {
			throw new UsernameNotFoundException(username + " was not found");
		}
		
		user = optUser.get();

		return new UserDetailsImpl(user.getId(), username, user.getEmail(), user.getPassword(), getAuthorities(user.getRoles()));
		//return new UserDetailsImpl(username, user.getPassword(), getAuthorities(user.getRoles()), user.getId());
	}

	
	private Collection<? extends GrantedAuthority> getAuthorities(Collection<Role> roles) {
		//return getGrantedAuthorities(getPrivileges(roles));
		return getGrantedAuthorities(roles.stream().map(t -> t.getName()).distinct().toList());
	}


	private List<String> getPrivileges(Collection<Role> roles) {
		List<String> privileges = new ArrayList<>();
		List<Privilege> collection = new ArrayList<>();
		for (Role role : roles) {
			privileges.add(role.getName());
			collection.addAll(role.getPrivileges());
		}
		for (Privilege item : collection) {
			privileges.add(item.getName());
		}
		return privileges;
	}

	
	private List<GrantedAuthority> getGrantedAuthorities(List<String> privileges) {
		List<GrantedAuthority> authorities = new ArrayList<>();
		for (String privilege : privileges) {
			authorities.add(new SimpleGrantedAuthority(privilege));
		}
		return authorities;
	}
	
	public Long getId() {
		return user.getId();
	}

}
