package org.isf.patientportal.rest.admin.download.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import io.swagger.annotations.Api;

import org.isf.patientportal.model.download.Download;
import org.isf.patientportal.model.download.DownloadRepository;
import org.springframework.http.HttpStatus;

@Api(value = "Download", tags={ "ADMIN_API" } )
@RestController
public class DownloadController {

    private final DownloadRepository repository;

    DownloadController(DownloadRepository repository) {
        this.repository = repository;
    }

    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/downloads")
    Iterable<Download> all() {
        return repository.findAll();
    }
    // end::get-aggregate-root[]

    @PostMapping("/downloads")
    Download newDownload(@RequestBody Download newDownload) {
        return repository.save(newDownload);
    }

    // Single item

    @GetMapping("/downloads/{id}")
    Download one(@PathVariable Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find download with id " + id));
    }

    @PutMapping("/downloads/{id}")
    Download replaceDownload(@RequestBody Download newDownload, @PathVariable Long id) {
        return repository.findById(id)
                .map(download -> {
                    download.setName(newDownload.getName());
                    return repository.save(download);
                })
                .orElseGet(() -> {
                    newDownload.setId(id);
                    return repository.save(newDownload);
                });
    }

    @DeleteMapping("/downloads/{id}")
    void deleteDownload(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
