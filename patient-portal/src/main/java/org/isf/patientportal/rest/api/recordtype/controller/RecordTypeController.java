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
package org.isf.patientportal.rest.api.recordtype.controller;

import java.net.URI;
import java.util.Optional;

import org.isf.patientportal.rest.api.recordtype.service.RecordTypeService;
import org.isf.patientportal.rest.api.recordtype.dto.RecordTypeDto;

import org.isf.patientportal.model.recordtype.RecordType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController(value = "RecordType")
@Api(value = "RecordType", tags={ "PUBLIC_API" } )
@RequestMapping("api/public")
public class RecordTypeController {
	
	@Autowired
	private final RecordTypeService service;

	public RecordTypeController() {
       service = null;
    }
	
    public RecordTypeController(RecordTypeService service) {
        this.service = service;
    }
    
    
    /*@ApiOperation(value = "New record type", response = RecordTypeDto.class, responseContainer = "List", 
    				notes = "Save a new record type.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = RecordTypeDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    @PostMapping(value="/recordtypes", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createRecordType(@RequestBody RecordTypeDto recordTypeDto){
    	RecordType savedRecordType = service.create(recordTypeDto);
    	URI location = ServletUriComponentsBuilder.fromCurrentRequest()
    	                .path("/{id}")
    	                .buildAndExpand(savedRecordType.getId())
    	                .toUri();
    	return ResponseEntity.created(location).body(savedRecordType);
    }
    
    
    @ApiOperation(value = "Update record type", response = RecordTypeDto.class, responseContainer = "List", 
    				notes = "Update a record type.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = RecordTypeDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    @PutMapping(value="/recordtypes/{recordTypeCode}", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateRecordType(@PathVariable String recordTypeCode, @RequestBody RecordTypeDto recordTypeDto){
    	Optional<RecordType> savedRecordType = service.update(recordTypeCode, recordTypeDto);
    	return ResponseEntity.of(Optional.of(savedRecordType));
    }
    
    
    @ApiOperation(value = "Delete record type by code", response = RecordTypeDto.class, responseContainer = "List", 
    				notes = "Delete a record type by code.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = RecordTypeDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    @DeleteMapping(value="/recordtypes/{recordTypeCode}", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> deleteRecordTypeByCode(@PathVariable String recordTypeCode){
    	service.deleteByCode(recordTypeCode);
    	return ResponseEntity.noContent().build();
    } 
    
    
    @ApiOperation(value = "Delete record type", response = RecordTypeDto.class, responseContainer = "List", 
    				notes = "Delete a record type by code.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = RecordTypeDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    @DeleteMapping(value="/recordtypes", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> deleteRecordType(@RequestBody RecordTypeDto recordTypeDto){
    	service.delete(recordTypeDto);
    	return ResponseEntity.noContent().build();
    } */
    
    
    @ApiOperation(value = "Record types list", response = RecordTypeDto.class, responseContainer = "List", 
    				notes = "List of all record types.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = RecordTypeDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    //@PreAuthorize("hasRole('USER') or hasRole('FAMILYMANAGER') or hasRole('ADMIN')")
    @GetMapping(value="/recordtypes", produces=MediaType.APPLICATION_JSON_VALUE)
    @ApiModelProperty
    ResponseEntity<?> findAll() {
         return ResponseEntity.of(Optional.of(service.findAll()));
    }
    

    @ApiOperation(value = "Record type by code", response = RecordTypeDto.class, responseContainer = "List", 
    				notes = "Retrieve a record type by code.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = RecordTypeDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    @GetMapping(value="/recordtypes/{code}", produces=MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> findByCode(@PathVariable String code) {
         return ResponseEntity.of(Optional.of(service.findByCode(code)));
    }

    
}
