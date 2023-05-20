package org.isf.patientportal.rest.api.patientrecord.controller;

import java.util.Optional;
import java.util.stream.Stream;

import org.isf.patientportal.model.patient.Patient;
import org.isf.patientportal.model.patientrecord.PatientRecord;
import org.isf.patientportal.model.recordtype.RecordType.Measurement;
import org.isf.patientportal.rest.api.patientrecord.dto.PatientRecordDto;
import org.isf.patientportal.rest.api.patientrecord.service.PatientRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;

/*****
 * @GetMapping("/patientrecords/{id}")
 * @PostMapping("/patientrecords")
 * @PutMapping("/patientrecords/{id}")
 * 
 * @GetMapping("/patientrecords/{patient}")
 * @GetMapping("/patientrecords/{patient}/{measurement}")
 * 
 * @author nicole
 *
 */

@RestController
public class PatientRecordController {

	@Autowired
	private final PatientRecordService service;

	public PatientRecordController() {
       service = null;
    }
	
    public PatientRecordController(PatientRecordService service) {
        this.service = service;
    }

    
    @ApiOperation(value = "Patient records list", notes = "List of all patient records.")
    @ApiResponse(code = 200, message = "")
    @PreAuthorize("hasRole('USER') or hasRole('FAMILYMANAGER') or hasRole('ADMIN')")
    @GetMapping(value="/patientrecords", produces=MediaType.APPLICATION_JSON_VALUE)
    Stream<PatientRecordDto> all() {
        return service.findAll();
    }
    

    @ApiOperation(value = "Patient record by id", notes = "Retrieve a patient record by id.")
    @ApiResponse(code = 200, message = "")
    @GetMapping(value="/patientrecords/{id}", produces=MediaType.APPLICATION_JSON_VALUE)
    PatientRecordDto one(@PathVariable Long id) {
        return service.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find patient record with id " + id));
    }

    	
}
