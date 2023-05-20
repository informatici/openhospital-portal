package org.isf.patientportal.model.hospitalevent;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import org.isf.patientportal.model.patient.Patient;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;

/**
 * @author mibem
 *
 */
@Getter
@Setter
@Entity
public class HospitalEvent {

	@Id
    @GeneratedValue
    private Long id;
	
	@Column(nullable = false, updatable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
	private LocalDateTime date;
	
	@OneToOne
	@NotNull
	@JoinColumn(name = "patient_id")
	private Patient patient;
	
	@OneToOne
	@NotNull
	@JoinColumn(name = "event_type_id")
	private EventType eventType;
	
	private String payload;

}
