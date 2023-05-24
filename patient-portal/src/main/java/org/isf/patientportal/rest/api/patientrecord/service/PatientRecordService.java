package org.isf.patientportal.rest.api.patientrecord.service;

import java.util.Optional;
import java.util.stream.Stream;

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

    
    /***************** GENERIC **********************/
    
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
    
    public Stream<PatientRecordDto> findByPatientIdMeasurementType(Long patientId, MeasurementType measurementType) {
		return patientRecordRepository.findByPatientIdMeasurementType(patientId, measurementType)
			.map(patientRecord -> modelMapper.map(patientRecord, PatientRecordDto.class))
			.get();
	}
}
