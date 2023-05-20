package org.isf.patientportal.rest.api.patientrecord.dto;

import java.time.LocalDateTime;

import org.isf.patientportal.model.patient.Patient;
import org.isf.patientportal.model.recordtype.RecordType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PatientRecordDto {

    private Long id;
	
	private LocalDateTime recordDate;
	
	private Patient patient;
	
	private RecordType recordType;
	
	private float value1;
	
	private float value2;
	
	private String optionValue;
	
	private String note;
	
}
