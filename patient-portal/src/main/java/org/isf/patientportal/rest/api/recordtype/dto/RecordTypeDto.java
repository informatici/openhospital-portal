package org.isf.patientportal.rest.api.recordtype.dto;

import org.isf.patientportal.model.recordtype.RecordType.MeasurementType;
import org.isf.patientportal.model.recordtype.RecordType.MeasurementValueType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RecordTypeDto {

	private Long id;
	
	private String measurementValueType;
	
	private String measurementType;
	
	private String description;
	
	private float defaultValue;
	
	private float minValue;
	
	private float maxValue;
	
	private String uom;

	
}
