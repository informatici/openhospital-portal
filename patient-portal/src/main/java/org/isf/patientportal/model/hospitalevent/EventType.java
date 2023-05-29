package org.isf.patientportal.model.hospitalevent;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class EventType {

	@Id
    @GeneratedValue
    private Long id;
	
	@NotNull
	private int code;
	
	private String name;

}
