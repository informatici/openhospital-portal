package org.isf.patientportal.rest.api.recordtype.dto;

import io.swagger.annotations.ApiModelProperty;
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
	
	@ApiModelProperty(allowableValues = "NUMERIC, OPTION")
	private String measurementValueType;
	
	@ApiModelProperty(allowableValues = "HEIGHT, WEIGHT, BLOOD_PRESSURE, HR, TEMPERATURE, SATURATION, HGT, RR, DIURESIS_VOL, DIURESIS, BOWEL, AUSCULTATION")
	private String measurementType;
	
	private String defaultOptionValue;
	
	private float defaultValue1;
	
	private float defaultValue2;
	
	private float minValue;
	
	private float maxValue;
	
	private String uom;

	
}
