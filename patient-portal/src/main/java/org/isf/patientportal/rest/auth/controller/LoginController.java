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
package org.isf.patientportal.rest.auth.controller;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.isf.patientportal.rest.auth.dto.LoginRequest;
import org.isf.patientportal.rest.auth.dto.LoginResponse;
import org.isf.patientportal.rest.auth.dto.MessageResponse;
import org.isf.patientportal.security.jwt.TokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.context.SecurityContextHolder;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**
 * Here only for swagger
 *
 * @author antonio
 */

@Api(value = "Login", tags={ "AUTH_API" } )
@RestController(value = "Login")
@RequestMapping("api/auth")
public class LoginController {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	TokenProvider tokenProvider;

	
	@ApiOperation(value = "Login", notes = "Login with the given credentials.",
    				tags = "AUTH_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = LoginResponse.class),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    //@PreAuthorize("hasRole('USER') or hasRole('FAMILYMANAGER') or hasRole('ADMIN')")
    @PostMapping(value="/login", produces=MediaType.APPLICATION_JSON_VALUE)
    @ApiModelProperty
	public ResponseEntity<?> login(@RequestBody @Valid LoginRequest loginRequest) {
		
		System.out.println(loginRequest.getUsername());
		System.out.println(loginRequest.getPassword());
		
		Authentication authentication = authenticationManager
						.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String token = tokenProvider.createToken(authentication, true); 
		
		UserDetails userDetails = (UserDetails) authentication.getPrincipal();
	
		List<String> roles = userDetails.getAuthorities().stream()
						.map(item -> item.getAuthority())
						.collect(Collectors.toList());

		return ResponseEntity.ok().body(new LoginResponse(token, authentication.getName(), userDetails.getUsername(), roles));
    }
	
	
	@ApiOperation(value = "Logout", notes = "Logout the current user.",
    				tags = "AUTH_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = LoginResponse.class),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    @PreAuthorize("hasRole('USER') or hasRole('FAMILYMANAGER') or hasRole('ADMIN')")
    @PostMapping(value="/logout", produces=MediaType.APPLICATION_JSON_VALUE)
    @ApiModelProperty
	ResponseEntity<?> logout() {
		 return ResponseEntity.ok()
		        .body(new MessageResponse("Signed out successfully!"));
	}
	
}
