package org.isf.patientportal.persona;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

@RestController
public class PersonaController {

    private final PersonaRepository repository;

    PersonaController(PersonaRepository repository) {
        this.repository = repository;
    }

    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/personas")
    List<Persona> all() {
        return repository.findAll();
    }
    // end::get-aggregate-root[]

    @PostMapping("/personas")
    Persona newPersona(@RequestBody Persona newPersona) {
        return repository.save(newPersona);
    }

    // Single item

    @GetMapping("/personas/{id}")
    Persona one(@PathVariable Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find persona with id " + id));
    }

    @PutMapping("/personas/{id}")
    Persona replacePersona(@RequestBody Persona newPersona, @PathVariable Long id) {
        return repository.findById(id)
                .map(persona -> {
                    persona.setName(newPersona.getName());
                    return repository.save(persona);
                })
                .orElseGet(() -> {
                    newPersona.setId(id);
                    return repository.save(newPersona);
                });
    }

    @DeleteMapping("/personas/{id}")
    void deletePersona(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
