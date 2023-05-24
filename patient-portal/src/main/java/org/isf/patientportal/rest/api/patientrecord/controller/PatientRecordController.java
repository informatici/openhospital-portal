package org.isf.patientportal.rest.api.patientrecord.controller;

import java.util.Optional;
import java.util.stream.Stream;

import org.isf.patientportal.model.recordtype.RecordType.MeasurementType;
import org.isf.patientportal.rest.api.patientrecord.dto.PatientRecordDto;
import org.isf.patientportal.rest.api.patientrecord.service.PatientRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

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

@RestController(value = "PUBLIC")
@Api(value = "PUBLIC", tags={ "PUBLIC_API" } )
@RequestMapping("api/public")
public class PatientRecordController {

	@Autowired
	private final PatientRecordService service;

	public PatientRecordController() {
       service = null;
    }
	
    public PatientRecordController(PatientRecordService service) {
        this.service = service;
    }
    
    
    @ApiOperation(value = "Patient records list", response = PatientRecordDto.class, responseContainer = "List", 
    				notes = "List of all patient records.",
    				tags = "PUBLIC API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = PatientRecordDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    @PreAuthorize("hasRole('USER') or hasRole('FAMILYMANAGER') or hasRole('ADMIN')")
    @GetMapping(value="/patientrecords", produces=MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> findAll(
    			/*@ApiParam(value = "Offset per la paginazione dei risultati")
			    @RequestParam( value = "offset", required = false) Integer offset,
			    @ApiParam(value = "Limite per la paginazione dei risultati")
			    @RequestParam( value = "limit", required = false) Integer limit*/) {
    	
    	 /*if( offset == null ) offset = 0;
         if( limit == null ) limit = 100;
         if( offset < 0 || limit <= 0 )
             return new ResponseEntity<>("{ \"response\": \"Offset or limit values not valid\" }", HttpStatus.BAD_REQUEST);*/

         Stream<PatientRecordDto> items = service.findAll();

         if( items.toList().isEmpty() )
             return new ResponseEntity<>("{ \"response\": \"Empty result\" }", HttpStatus.NOT_FOUND);

         return ResponseEntity.ok().body(items);
    }
    

    @ApiOperation(value = "Patient record by id", response = PatientRecordDto.class, responseContainer = "List", 
    				notes = "Retrieve a patient record by id.",
    				tags = "PUBLIC API")
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
         			//.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find patient record with id " + id));
    }

   
    @ApiOperation(value = "Retrieve patient records by patient id", response = PatientRecordDto.class, responseContainer = "List", 
    				notes = "Retrieve all patient records a patient by id.",
    				tags = "PUBLIC API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = PatientRecordDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
	@GetMapping(value = "/patientrecords/{patientId}", produces=MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> all(@PathVariable Long patientId) {
        return ResponseEntity.of(Optional.of(service.findByPatientId(patientId)));
    }
    	
    
    @ApiOperation(value = "Retrieve patient records of a specific measurement by patient id", response = PatientRecordDto.class, responseContainer = "List", 
    				notes = "Retrieve all patient records of a specific measurement a patient by id.",
    				tags = "PUBLIC API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = PatientRecordDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
	
    @GetMapping(value="/patientrecords/{patientId}/{measurement}", produces=MediaType.APPLICATION_JSON_VALUE)
    Stream<PatientRecordDto> all(@PathVariable Long patientId, @PathVariable("measurementType") MeasurementType measurementType) {
        return service.findByPatientIdMeasurementType(patientId, measurementType);
    }
}
