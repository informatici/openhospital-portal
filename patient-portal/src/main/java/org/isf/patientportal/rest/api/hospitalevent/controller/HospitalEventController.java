package org.isf.patientportal.rest.api.hospitalevent.controller;

import java.net.URI;
import java.util.Optional;

import org.isf.patientportal.rest.api.hospitalevent.service.HospitalEventService;
import org.isf.patientportal.model.hospitalevent.EventType;
import org.isf.patientportal.model.hospitalevent.HospitalEvent;
import org.isf.patientportal.rest.api.hospitalevent.dto.*;
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
import org.springframework.web.bind.annotation.RequestParam;
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

@RestController(value = "HospitalEvent")
@Api(value = "HospitalEvent", tags={ "PUBLIC_API" } )
@RequestMapping("api/public")
public class HospitalEventController {

	@Autowired
	private final HospitalEventService service;

	public HospitalEventController() {
       service = null;
    }
	
    public HospitalEventController(HospitalEventService service) {
        this.service = service;
    }
    
    
    @ApiOperation(value = "New hospital event", response = HospitalEventDto.class, responseContainer = "List", 
    				notes = "Save a new hospital event.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = HospitalEventDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    @PostMapping(value="/hospitalevents", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createHospitalEvent(@RequestBody HospitalEventDto hospitalEventDto){
    	HospitalEvent savedHospitalEvent = service.create(hospitalEventDto);
    	URI location = ServletUriComponentsBuilder.fromCurrentRequest()
    	                .path("/{id}")
    	                .buildAndExpand(savedHospitalEvent.getId())
    	                .toUri();
    	return ResponseEntity.created(location).body(savedHospitalEvent);
    }
    
    
    @ApiOperation(value = "Update hospital event", response = HospitalEventDto.class, responseContainer = "List", 
    				notes = "Update a hospital event.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = HospitalEventDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    @PutMapping(value="/hospitalevents/{hospitalEventId}", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateHospitalEvent(@PathVariable Long hospitalEventId, @RequestBody HospitalEventDto hospitalEventDto){
    	Optional<HospitalEvent> savedHospitalEvent = service.update(hospitalEventId, hospitalEventDto);
    	return ResponseEntity.of(Optional.of(savedHospitalEvent));
    }
    
    
    @ApiOperation(value = "Delete hospital event", response = HospitalEventDto.class, responseContainer = "List", 
    				notes = "Delete a hospital event.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = HospitalEventDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    @DeleteMapping(value="/hospitalevents/{hospitalEventId}", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> deleteHospitalEvent(@PathVariable Long hospitalEventId){
    	service.delete(hospitalEventId);
    	return ResponseEntity.noContent().build();
    } 
    
    
    @ApiOperation(value = "Hospital events list", response = HospitalEventDto.class, responseContainer = "List", 
    				notes = "List of all hospital events.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = HospitalEventDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    //@PreAuthorize("hasRole('USER') or hasRole('FAMILYMANAGER') or hasRole('ADMIN')")
    @GetMapping(value="/hospitalevents", produces=MediaType.APPLICATION_JSON_VALUE)
    @ApiModelProperty
    ResponseEntity<?> findAll() {
         return ResponseEntity.of(Optional.of(service.findAll()));
    }
    

    @ApiOperation(value = "Hosptal event by id", response = HospitalEventDto.class, responseContainer = "List", 
    				notes = "Retrieve a hospital event by id.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = HospitalEventDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
    @GetMapping(value="/hospitalevents/{id}", produces=MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> findById(@PathVariable Long id) {
         return ResponseEntity.of(Optional.of(service.findById(id)));
    }

   
    @ApiOperation(value = "Retrieve hospital events by patient id", response = HospitalEventDto.class, responseContainer = "List", 
    				notes = "Retrieve all hospital events a patient by id.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = HospitalEventDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
	@GetMapping(value = "/hospitalevents/patient/{patientId}", produces=MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> all(@PathVariable Long patientId) {
        return ResponseEntity.of(Optional.of(service.findByPatientId(patientId)));
    }
    	
    
    @ApiOperation(value = "Retrieve hospital events of a specific event type code by patient id", response = HospitalEventDto.class, responseContainer = "List", 
    				notes = "Retrieve all hospital events of a specific event type code by patient id.",
    				tags = "PUBLIC_API")
    @ApiResponses( value = {
            @ApiResponse(code = 200, message = "OK", response = HospitalEventDto.class, responseContainer = "List"),
            @ApiResponse(code = 400, message = "Invalid parameters supplied"),
            @ApiResponse(code = 403, message = "Request not authorized"),
            @ApiResponse(code = 404, message = "Resource not found"),
            @ApiResponse(code = 405, message = "Service not supported"),
            @ApiResponse(code = 500, message = "Internal server error", response = ResponseStatusException.class)})
	
    @GetMapping(value="/hospitalevents/eventType/{patientId}", produces=MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> all(@PathVariable Long patientId, @RequestParam("eventTypeCode") String eventTypeCode) {
        return ResponseEntity.of(Optional.of(service.findByPatientIdEventTypeCode(patientId, eventTypeCode)));
    }
}