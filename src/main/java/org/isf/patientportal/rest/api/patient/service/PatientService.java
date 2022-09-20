package org.isf.patientportal.rest.api.patient.service;

import java.util.Optional;
import java.util.stream.Stream;

import org.isf.patientportal.model.user.UserRepository;
import org.isf.patientportal.rest.api.patient.dto.PatientDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("patientService")
public class PatientService {
    @Autowired
    private final UserRepository userRepository;

    private final ModelMapper modelMapper = new ModelMapper();

    public PatientService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Stream<PatientDto> findAll() {
        return userRepository.findAll()
            .map(user -> modelMapper.map(user, PatientDto.class))
            .get();
    }

	public Optional<PatientDto> findById(Long id) {
		return userRepository.findById(id).map(user -> modelMapper.map(user, PatientDto.class));
	}



}
