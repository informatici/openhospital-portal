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
package org.isf.patientportal.rest.admin.user.service;

import java.util.Optional;
import java.util.stream.Stream;

import org.isf.patientportal.model.user.UserRepository;
import org.isf.patientportal.rest.admin.user.dto.UserDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service("userService")
public class UserService {

	@Autowired
    private UserRepository userRepository;
	
	
	private final ModelMapper modelMapper = new ModelMapper();

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Stream<UserDto> findAll() {
        return userRepository.findAll()
            .map(user -> modelMapper.map(user, UserDto.class))
            .get();
    }

	public Optional<UserDto> findById(Long id) {
		return userRepository.findById(id).map(user -> modelMapper.map(user, UserDto.class));
	}
	
    public Optional<UserDto> findByEmail(String email) {
    	return userRepository.findByEmail(email).map(user -> modelMapper.map(user, UserDto.class));
    }

    public Optional<UserDto> findByUsername(String username) {
    	return userRepository.findByUsername(username).map(user -> modelMapper.map(user, UserDto.class));	
    }

}
