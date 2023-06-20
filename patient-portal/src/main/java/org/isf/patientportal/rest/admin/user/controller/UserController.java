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
package org.isf.patientportal.rest.admin.user.controller;

import java.util.Optional;

import org.isf.patientportal.rest.admin.user.service.UserService;
import org.isf.patientportal.rest.api.patientrecord.dto.PatientRecordDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;


@Api(value = "User", tags={ "ADMIN_API" } )
@RestController(value = "User")
@RequestMapping("api/admin")
public class UserController {

    @Autowired
    private UserService userService;


    @ApiOperation(value = "List of all users", notes = "List users.")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = PatientRecordDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping(value="/users", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> findAll(){
    	return ResponseEntity.of(Optional.of(userService.findAll()));
    }

    
    @ApiOperation(value = "User by id", notes = "Retrieve a user by id.")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = PatientRecordDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    @PreAuthorize("hasAnyRole('ROLE_PATIENT', 'ROLE_ADMIN')")
    //@PreAuthorize("(hasRole('ROLE_PATIENT') and #id == principal.id) or (hasRole('ROLE_ADMIN'))")
    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> findById(@PathVariable(value = "id") Long id){
    	return ResponseEntity.of(Optional.of(userService.findById(id)));
    }
    
    @ApiOperation(value = "User by email", notes = "Retrieve a user by email.")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = PatientRecordDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/users/email/{email}", method = RequestMethod.GET)
    public ResponseEntity<?> findByEmail(@PathVariable(value = "email") String email){
    	return ResponseEntity.of(Optional.of(userService.findByEmail(email)));
    }
    
    @ApiOperation(value = "User by username", notes = "Retrieve a user by username.")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = PatientRecordDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/users/username/{username}", method = RequestMethod.GET)
    public ResponseEntity<?> findByUsername(@PathVariable(value = "username") String username){
    	return ResponseEntity.of(Optional.of(userService.findByUsername(username)));
    }

}
