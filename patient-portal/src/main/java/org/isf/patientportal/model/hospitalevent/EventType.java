package org.isf.patientportal.model.hospitalevent;

import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import org.isf.patientportal.model.patient.Patient;
import org.isf.patientportal.model.recordtype.RecordType;

import com.fasterxml.jackson.annotation.JsonFormat;

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
