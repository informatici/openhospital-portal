package org.isf.patientportal.rest.api.patient.controller;

import java.util.Optional;
import java.util.stream.Stream;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

import org.isf.patientportal.rest.api.patient.dto.PatientDto;
import org.isf.patientportal.rest.api.patient.service.PatientService;
import org.isf.patientportal.rest.api.patientrecord.dto.PatientRecordDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;

@RestController(value = "Patient")
@Api(value = "Patient", tags={ "PUBLIC_API" } )
@RequestMapping("api/public")
public class PatientController {

    @Autowired
    private final PatientService service;

    public PatientController(PatientService service) {
        this.service = service;
    }

    // Aggregate root
    // tag::get-aggregate-root[]
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
    ResponseEntity<?> all() {
        return ResponseEntity.of(Optional.of(service.findAll()));
    }
    // end::get-aggregate-root[]

    
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
    ResponseEntity<?> one(@PathVariable Long id) {
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
