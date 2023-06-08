package org.isf.patientportal.rest.api.hospitalevent.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EventTypeDto {

	private Long id;
	
	private String code;
	
	private String name;
}
