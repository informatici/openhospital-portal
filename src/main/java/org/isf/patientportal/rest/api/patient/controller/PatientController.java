package org.isf.patientportal.rest.api.patient.controller;

import java.util.stream.Stream;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;

import org.isf.patientportal.rest.api.patient.dto.PatientDto;
import org.isf.patientportal.rest.api.patient.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;

@RestController
public class PatientController {

    @Autowired
    private final PatientService service;

    public PatientController(PatientService service) {
        this.service = service;
    }

    // Aggregate root
    // tag::get-aggregate-root[]
    @ApiOperation(value = "List Patients", notes = "List patients.")
    @ApiResponse(code = 200, message = "")
    @PreAuthorize("hasRole('USER') or hasRole('FAMILYMANAGER') or hasRole('ADMIN')")
    @GetMapping(value="/patients", produces=MediaType.APPLICATION_JSON_VALUE)
    Stream<PatientDto> all() {
        return service.findAll();
    }
    // end::get-aggregate-root[]

    // @PostMapping("/patients")
    // PatientDto newPatient(@RequestBody PatientDto newPatient) {
    //     return service.save(newPatient);
    // }

    @GetMapping("/patients/{id}")
    PatientDto one(@PathVariable Long id) {
        return service.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find patient with id " + id));
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
