package org.isf.patientportal.model.patientrecord;

import java.time.LocalDateTime;

import org.isf.patientportal.model.patient.Patient;
import org.isf.patientportal.model.recordtype.RecordType;

public class PatientRecord {

	private int id;
	private LocalDateTime date;
	private Patient patient;
	private RecordType recordType;
	private float value;
	private String note;
}
