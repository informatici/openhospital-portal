package org.isf.patientportal.rest.controller.crud.patient;

import java.util.ArrayList;
import java.util.List;

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

import org.isf.patientportal.model.patient.Patient;
import org.isf.patientportal.model.patient.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

@RestController
public class PatientController {

    @Autowired
    private final PatientRepository repository;

    PatientController(PatientRepository repository) {
        this.repository = repository;
    }

    // Aggregate root
    // tag::get-aggregate-root[]
    @ApiOperation(value = "List Patients", notes = "List patients.")
    @ApiResponse(code = 200, message = "")
    @GetMapping(value="/patients", produces=MediaType.APPLICATION_JSON_VALUE)
    List<Patient> all() {
        List<Patient> result = new ArrayList<Patient>();
        Iterable<Patient> patients = repository.findAll();
        patients.forEach(result::add);
        return result;
    }
    // end::get-aggregate-root[]

    @PostMapping("/patients")
    Patient newPatient(@RequestBody Patient newPatient) {
        return repository.save(newPatient);
    }

    // Single item

    @GetMapping("/patients/{id}")
    Patient one(@PathVariable Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find patient with id " + id));
    }

    @PutMapping("/patients/{id}")
    Patient replacePatient(@RequestBody Patient newPatient, @PathVariable Long id) {
        return repository.findById(id)
                .map(patient -> {
                    patient.setName(newPatient.getName());
                    return repository.save(patient);
                })
                .orElseGet(() -> {
                    newPatient.setId(id);
                    return repository.save(newPatient);
                });
    }

    @DeleteMapping("/patients/{id}")
    void deletePatient(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
