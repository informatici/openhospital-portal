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
