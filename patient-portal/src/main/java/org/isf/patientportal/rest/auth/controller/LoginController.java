/*
 * Open Hospital (www.open-hospital.org)
 * Copyright © 2006-2021 Informatici Senza Frontiere (info@informaticisenzafrontiere.org)
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
package org.isf.patientportal.rest.auth.controller;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.isf.patientportal.rest.auth.dto.LoginRequest;
import org.isf.patientportal.rest.auth.dto.LoginResponse;
import org.isf.patientportal.security.CustomAuthenticationManager;
import org.isf.patientportal.security.jwt.TokenProvider;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**
 * Here only for swagger
 *
 * @author antonio
 */
@Api(value = "Login", produces = MediaType.APPLICATION_JSON_VALUE)
@RestController
public class LoginController {

	@Autowired
	private HttpSession httpSession;

	@Autowired
	private TokenProvider tokenProvider;

	@Autowired
	private CustomAuthenticationManager authenticationManager;

	private static final Logger LOGGER = org.slf4j.LoggerFactory.getLogger(LoginController.class);

	/**
	 * Implemented by Spring Security
	 */
	@ApiOperation(value = "Login", notes = "Login with the given credentials.")
	@ApiResponses({ @ApiResponse(code = 200, message = "", response = LoginResponse.class) })
	@PostMapping(value = "/auth/login", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity< ? > login(@Valid @RequestBody LoginRequest loginRequest) {
		Authentication authentication = authenticationManager
						.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = tokenProvider.generateJwtToken(authentication, true);
		String userDetails = (String) authentication.getPrincipal();

		return ResponseEntity.ok(new LoginResponse(jwt, userDetails));
	}
}
