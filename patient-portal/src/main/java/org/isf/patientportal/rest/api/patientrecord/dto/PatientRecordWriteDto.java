package org.isf.patientportal.rest.api.patientrecord.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PatientRecordWriteDto {
	
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
	private LocalDateTime recordDate;
	
	private Long patientId;
	
	private String recordTypeCode;
	
	private float value1;
	
	private float value2;
	
	private String optionValue;
	
	private String note;

}