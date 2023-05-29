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
