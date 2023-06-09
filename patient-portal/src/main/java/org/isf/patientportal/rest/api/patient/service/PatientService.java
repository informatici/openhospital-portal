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
package org.isf.patientportal.rest.api.patient.service;

import java.util.Optional;
import java.util.stream.Stream;

import org.isf.patientportal.model.patient.PatientRepository;
import org.isf.patientportal.rest.api.patient.dto.PatientDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("patientService")
public class PatientService {
    @Autowired
    private final PatientRepository patientRepository;

    private final ModelMapper modelMapper = new ModelMapper();

    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public Stream<PatientDto> findAll() {
        return patientRepository.findAll()
            .map(user -> modelMapper.map(user, PatientDto.class))
            .get();
    }

	public Optional<PatientDto> findById(Long id) {
		return patientRepository.findById(id).map(user -> modelMapper.map(user, PatientDto.class));
	}



}
