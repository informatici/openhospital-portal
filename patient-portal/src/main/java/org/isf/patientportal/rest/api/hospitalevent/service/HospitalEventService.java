package org.isf.patientportal.rest.api.hospitalevent.service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.stream.Stream;

import org.isf.patientportal.model.hospitalevent.EventType;
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
	
}
