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
package org.isf.patientportal.rest.api.patientrecord.controller;

import java.net.URI;
import java.util.Optional;

import org.isf.patientportal.model.patientrecord.PatientRecord;
import org.isf.patientportal.model.recordtype.RecordType.MeasurementType;
import org.isf.patientportal.rest.api.patient.dto.PatientDto;
import org.isf.patientportal.rest.api.patient.service.PatientService;
import org.isf.patientportal.rest.api.patientrecord.dto.PatientRecordDto;
import org.isf.patientportal.rest.api.patientrecord.dto.PatientRecordWriteDto;
import org.isf.patientportal.rest.api.patientrecord.service.PatientRecordService;
import org.isf.patientportal.rest.api.recordtype.dto.RecordTypeDto;
import org.isf.patientportal.rest.api.recordtype.service.RecordTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/*****
 * @author nicole
 *
 */

@RestController(value = "PatientRecord")
@Api(value = "PatientRecord", tags={ "PUBLIC_API" } )
@RequestMapping("api/public")
public class PatientRecordController {

	@Autowired
	private final PatientRecordService service;
	
	@Autowired
	private final PatientService patientService;
	
	@Autowired
	private final RecordTypeService recordTypeService;
	

	public PatientRecordController() {
		service = null;
		patientService = null;
		recordTypeService = null;
    }
	
    public PatientRecordController(PatientRecordService service, PatientService patientService, RecordTypeService recordTypeService) {
        this.service = service;
        this.patientService = patientService;
        this.recordTypeService = recordTypeService;
    }
    
    
    @ApiOperation(value = "New patient record", response = PatientRecordDto.class, responseContainer = "List", 
    				notes = "Save a new patient record.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = PatientRecordDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    @PostMapping(value="/patientrecords", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createRecordPatient(@RequestBody PatientRecordWriteDto patientRecordWriteDto){
    	
    	Optional<PatientDto> patientDto = patientService.findById(patientRecordWriteDto.getPatientId());
    	Optional<RecordTypeDto> recordTypeDto = recordTypeService.findByCode(patientRecordWriteDto.getRecordTypeCode());
    	
    	if(!patientDto.isPresent() || !recordTypeDto.isPresent() )
    		return ResponseEntity.notFound().build();
    	
    	PatientRecordDto patientRecordDto = new PatientRecordDto(
    					patientRecordWriteDto.getRecordDate(), 
    					patientDto.get(), 
    					recordTypeDto.get(), 
    					patientRecordWriteDto.getValue1(), 
    					patientRecordWriteDto.getValue2(), 
    					patientRecordWriteDto.getOptionValue(), 
    					patientRecordWriteDto.getNote());
    		
    	PatientRecord savedRecordPatient = service.create(patientRecordDto);
    	URI location = ServletUriComponentsBuilder.fromCurrentRequest()
    	                .path("/{id}")
    	                .buildAndExpand(savedRecordPatient.getId())
    	                .toUri();
    	return ResponseEntity.created(location).body(savedRecordPatient);
    }
    
    
    @ApiOperation(value = "Update patient record", response = PatientRecordDto.class, responseContainer = "List", 
    				notes = "Update a patient record.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = PatientRecordDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    @PutMapping(value="/patientrecords/{patientRecordId}", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateRecordPatient(@PathVariable Long patientRecordId, @RequestBody PatientRecordDto patientRecordDto){
    	Optional<PatientRecord> savedRecordPatient = service.update(patientRecordId, patientRecordDto);
    	return ResponseEntity.of(Optional.of(savedRecordPatient));
    }
    
    @ApiOperation(value = "Delete patient record", response = PatientRecordDto.class, responseContainer = "List", 
    				notes = "Delete a patient record.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = PatientRecordDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    @DeleteMapping(value="/patientrecords/{patientRecordId}", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> deleteRecordPatient(@PathVariable Long patientRecordId){
    	service.delete(patientRecordId);
    	return ResponseEntity.noContent().build();
    } 
    
    
    @ApiOperation(value = "Patient records list", response = PatientRecordDto.class, responseContainer = "List", 
    				notes = "List of all patient records.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = PatientRecordDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    //@PreAuthorize("hasRole('USER') or hasRole('FAMILYMANAGER') or hasRole('ADMIN')")
    @GetMapping(value="/patientrecords", produces=MediaType.APPLICATION_JSON_VALUE)
    @ApiModelProperty
    ResponseEntity<?> findAll() {
         return ResponseEntity.of(Optional.of(service.findAll()));
    }
    

    @ApiOperation(value = "Patient record by id", response = PatientRecordDto.class, responseContainer = "List", 
    				notes = "Retrieve a patient record by id.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = PatientRecordDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    @GetMapping(value="/patientrecords/{id}", produces=MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> findById(@PathVariable Long id) {
         return ResponseEntity.of(Optional.of(service.findById(id)));
    }

   
    @ApiOperation(value = "Retrieve patient records by patient id", response = PatientRecordDto.class, responseContainer = "List", 
    				notes = "Retrieve all patient records a patient by id.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = PatientRecordDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
	@GetMapping(value = "/patientrecords/patient/{patientId}", produces=MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> findByPatientId(@PathVariable Long patientId) {
        return ResponseEntity.of(Optional.of(service.findByPatientId(patientId)));
    }
    
    @ApiOperation(value = "Patient records count", response = PatientRecordDto.class, responseContainer = "List", 
    				notes = "Number of patient records of a specific patient.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = PatientRecordDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
	@GetMapping(value = "/patientrecords/count/{patientId}", produces=MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> countByPatientId(@PathVariable Long patientId) {
        return ResponseEntity.of(Optional.of(service.countByPatientId(patientId)));
    }
    	
    
    @ApiOperation(value = "Retrieve patient records of a specific measurement by patient id", response = PatientRecordDto.class, responseContainer = "List", 
    				notes = "Retrieve all patient records of a specific measurement a patient by id.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = PatientRecordDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
	
    @GetMapping(value="/patientrecords/measurement/{patientId}", produces=MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> all(@PathVariable Long patientId, @RequestParam("measurementType") MeasurementType measurementType) {
        return ResponseEntity.of(Optional.of(service.findByPatientIdMeasurementType(patientId, measurementType)));
    }
}
