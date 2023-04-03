package org.isf.patientportal.model.hospitalevent;

import java.time.LocalDateTime;

import org.isf.patientportal.model.patient.Patient;

/**
 * @author mibem
 *
 */
public class HospitalEvent {

	private int id;
	private LocalDateTime date;
	private Patient patient;
	private EventType eventType;
	private String payload;

}
