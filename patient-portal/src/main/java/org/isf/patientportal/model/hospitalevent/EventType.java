package org.isf.patientportal.model.hospitalevent;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import org.modelmapper.Converter;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class EventType {

	
    @GeneratedValue
    private Long id;
	
    @Id
	@NotNull
	@Column(length = 2)
	private String code;
	
	private String name;
	

}
