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
package org.isf.patientportal.rest.api.patientrecord.service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.stream.Stream;

import org.isf.patientportal.model.patientrecord.PatientRecord;
import org.isf.patientportal.model.patientrecord.PatientRecordRepository;
import org.isf.patientportal.model.recordtype.RecordType.MeasurementType;
import org.isf.patientportal.rest.api.patientrecord.dto.PatientRecordDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("patientRecordService")
public class PatientRecordService {
	
	@Autowired
    private final PatientRecordRepository patientRecordRepository;

    private final ModelMapper modelMapper = new ModelMapper();

    
    public PatientRecordService() {
        this.patientRecordRepository = null;
    }
    
    public PatientRecordService(PatientRecordRepository patientRecordRepository) {
        this.patientRecordRepository = patientRecordRepository;
    }

    
    public PatientRecord create(PatientRecordDto item) {
		PatientRecordDto copy = new PatientRecordDto(
				item.getId(),
                item.getRecordDate(),
                item.getPatient(),
                item.getRecordType(),
                item.getValue1(),
                item.getValue2(),
                item.getOptionValue(),
                item.getNote(),
                LocalDateTime.now()
        );
        return patientRecordRepository.save(modelMapper.map(copy, PatientRecord.class));
	}
	
	
    public Optional<PatientRecord> update(Long patientRecordId, PatientRecordDto newItem) {
        return patientRecordRepository.findById(patientRecordId)
                .map(oldItem -> {PatientRecord updated = oldItem.updateWith(modelMapper.map(newItem, PatientRecord.class));
                   return patientRecordRepository.save(updated);
                });   
    }

    public void delete(Long patientRecordId) {
    	patientRecordRepository.deleteById(patientRecordId);
	}
	
    
    public Optional<PatientRecordDto> findById(Long id) {
		return patientRecordRepository.findById(id)
			.map(patientRecord -> modelMapper.map(patientRecord, PatientRecordDto.class));
	}
	
    
    public Stream<PatientRecordDto> findAll() {
        return patientRecordRepository.findAll()
            .map(patientRecord -> modelMapper.map(patientRecord, PatientRecordDto.class))
            .get();
    }
    
    
    public Stream<PatientRecordDto> findByPatientId(Long patientId) {
		return patientRecordRepository.findByPatientId(patientId)
			.map(patientRecord -> modelMapper.map(patientRecord, PatientRecordDto.class))
			.get();
	}
    
    
    public Long countByPatientId(Long patientId) {
		return patientRecordRepository.countByPatientId(patientId);
	}
    
    
    public Stream<PatientRecordDto> findByPatientIdMeasurementType(Long patientId, MeasurementType measurementType) {
		return patientRecordRepository.findByPatientIdMeasurementType(patientId, measurementType)
			.map(patientRecord -> modelMapper.map(patientRecord, PatientRecordDto.class))
			.get();
	}
}
