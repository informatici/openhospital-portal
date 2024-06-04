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
package org.isf.patientportal.rest.api.hospitalevent.service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.stream.Stream;

import org.isf.patientportal.model.hospitalevent.HospitalEvent;
import org.isf.patientportal.model.hospitalevent.HospitalEventRepository;
import org.isf.patientportal.rest.api.hospitalevent.dto.HospitalEventDto;

import org.modelmapper.ModelMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service("hospitalEventService")
public class HospitalEventService {

	@Autowired
	private final HospitalEventRepository hospitalEventRepository;
	
	private final ModelMapper modelMapper = new ModelMapper();

	
	public HospitalEventService() {
		this.hospitalEventRepository = null;
	}


	public HospitalEventService(HospitalEventRepository hospitalEventRepository) {
		this.hospitalEventRepository = hospitalEventRepository;
	}
	
	
	public HospitalEvent create(HospitalEventDto item) {
		HospitalEventDto copy = new HospitalEventDto(
				item.getId(),
                item.getDate(),
                item.getPatient(),
                item.getEventType(),
                item.getPayload(),
                item.getReadDate(),
                LocalDateTime.now()
        );
        return hospitalEventRepository.save(modelMapper.map(copy, HospitalEvent.class));
	}
	
	
    public Optional<HospitalEvent> update(Long hospitalEventId, HospitalEventDto newItem) {
        return hospitalEventRepository.findById(hospitalEventId)
                .map(oldItem -> {HospitalEvent updated = oldItem.updateWith(modelMapper.map(newItem, HospitalEvent.class));
                   return hospitalEventRepository.save(updated);
                });   
    }

    public void delete(Long hospitalEventId) {
    	hospitalEventRepository.deleteById(hospitalEventId);
	}
	
    
    public Optional<HospitalEventDto> findById(Long id) {
		return hospitalEventRepository.findById(id)
			.map(hospitalEvent -> modelMapper.map(hospitalEvent, HospitalEventDto.class));
	}
	
    
    public Stream<HospitalEventDto> findAll() {
        return hospitalEventRepository.findAll()
            .map(hospitalEvent -> modelMapper.map(hospitalEvent, HospitalEventDto.class))
            .get();
    }
    
    
    public Stream<HospitalEventDto> findByPatientId(Long patientId) {
		return hospitalEventRepository.findByPatientId(patientId)
			.map(hospitalEvent -> modelMapper.map(hospitalEvent, HospitalEventDto.class))
			.get();
	}
    
    
    public Stream<HospitalEventDto> findByPatientIdEventTypeCode(Long patientId, String eventTypeCode) {
		return hospitalEventRepository.findByPatientIdEventTypeCode(patientId, eventTypeCode)
			.map(hospitalEvent -> modelMapper.map(hospitalEvent, HospitalEventDto.class))
			.get();
	}
	
    
    public Long countByPatientId(Long patientId) {
		return hospitalEventRepository.countByPatientId(patientId);
	}
    
    
    public Long countReadByPatientId(Long patientId) {
		return hospitalEventRepository.countReadByPatientId(patientId);
	}
   
    
    public Long countByPatientIdEventTypeCode(Long patientId, String eventTypeCode) {
		return hospitalEventRepository.countByPatientIdEventTypeCode(patientId, eventTypeCode);
	}
    
    
    public Long countReadByPatientIdEventTypeCode(Long patientId, String eventTypeCode) {
		return hospitalEventRepository.countReadByPatientIdEventTypeCode(patientId, eventTypeCode);
	}
    
}
