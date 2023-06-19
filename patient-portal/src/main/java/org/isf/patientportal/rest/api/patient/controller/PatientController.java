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
package org.isf.patientportal.rest.api.patient.controller;

import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

import org.isf.patientportal.rest.api.patient.service.PatientService;
import org.isf.patientportal.rest.api.patientrecord.dto.PatientRecordDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;


@RestController(value = "Patient")
@Api(value = "Patient", tags={ "PUBLIC_API" } )
@RequestMapping("api/public")
public class PatientController {

    @Autowired
    private final PatientService service;

    public PatientController(PatientService service) {
        this.service = service;
    }

   
    @ApiOperation(value = "List of all Patients", notes = "List patients.")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = PatientRecordDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    //@PreAuthorize("hasRole('USER') or hasRole('FAMILYMANAGER') or hasRole('ADMIN')")
    @GetMapping(value="/patients", produces=MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> findAll() {
        return ResponseEntity.of(Optional.of(service.findAll()));
    }

    
    // @PostMapping("/patients")
    // PatientDto newPatient(@RequestBody PatientDto newPatient) {
    //     return service.save(newPatient);
    // }

    
    @ApiOperation(value = "Patient by id", notes = "Patient by id.")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = PatientRecordDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    @GetMapping("/patients/{id}")
    ResponseEntity<?> findById(@PathVariable Long id) {
    	return ResponseEntity.of(Optional.of(service.findById(id)));
    	//return service.findById(id)
        //        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find patient with id " + id));
    }

    
    // @PutMapping("/patients/{id}")
    // PatientDto replacePatient(@RequestBody PatientDto newPatient, @PathVariable Long id) {
    //     return repository.findById(id)
    //             .map(patient -> {
    //                 patient.setName(newPatient.getName());
    //                 return repository.save(patient);
    //             })
    //             .orElseGet(() -> {
    //                 newPatient.setId(id);
    //                 return repository.save(newPatient);
    //             });
    // }
    

    // @DeleteMapping("/patients/{id}")
    // void deletePatient(@PathVariable Long id) {
    //     repository.deleteById(id);
    // }
}
