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
package org.isf.patientportal.rest.api.eventtype.controller;

import java.util.Optional;

import org.isf.patientportal.rest.api.eventtype.service.EventTypeService;
import org.isf.patientportal.rest.api.eventtype.dto.EventTypeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;


/*****
 * @author nicole
 *
 */

@RestController(value = "EventType")
@Api(value = "EventType", tags={ "PUBLIC_API" } )
@RequestMapping("api/public")
public class EventTypeController {

	@Autowired
	private final EventTypeService service;

	public EventTypeController() {
       service = null;
    }
	
    public EventTypeController(EventTypeService service) {
        this.service = service;
    }
    
    @ApiOperation(value = "Event types list", response = EventTypeDto.class, responseContainer = "List", 
    				notes = "List of all event types.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = EventTypeDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    //@PreAuthorize("hasRole('USER') or hasRole('FAMILYMANAGER') or hasRole('ADMIN')")
    @GetMapping(value="/eventtypes", produces=MediaType.APPLICATION_JSON_VALUE)
    @ApiModelProperty
    ResponseEntity<?> findAll() {
         return ResponseEntity.of(Optional.of(service.findAll()));
    }
    

    @ApiOperation(value = "Event type by code", response = EventTypeDto.class, responseContainer = "List", 
    				notes = "Retrieve an event type by code.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = EventTypeDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    @GetMapping(value="/eventtypes/{code}", produces=MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> findByCode(@PathVariable String code) {
         return ResponseEntity.of(Optional.of(service.findByCode(code)));
    }
    
}