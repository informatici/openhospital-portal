package org.isf.patientportal.model.patientrecord;

import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Date;

import javax.persistence.Column;
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
public class PatientRecord {
	
	@Id
    @GeneratedValue
    private Long id;
	
	@NotNull
	private LocalDateTime date;
	
	@NotNull
	private Patient patient;
	
	@NotNull
	private RecordType recordType;
	
	private float value1;
	
	private float value2;
	
	private String optionValue;
	
	private String note;
	
	@Column(nullable = false, updatable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
    private Date created = new Date();
	
	
	public PatientRecord() {
		super();
	}
	
	public PatientRecord(Long id, 
					@NotNull LocalDateTime date, 
					@NotNull Patient patient, 
					@NotNull RecordType recordType, 
					float value1, 
					float value2,
					String optionValue, 
					String note) {
		this.id = id;
		this.date = date;
		this.patient = patient;
		this.recordType = recordType;
		this.value1 = value1;
		this.value2 = value2;
		this.optionValue = optionValue;
		this.note = note;
		this.created = Calendar.getInstance().getTime();
	}

	public PatientRecord updateWith(PatientRecord item) {
        return new PatientRecord(
            this.id,
            item.date,
            item.patient,
            item.recordType,
            item.value1,
            item.value2,
            item.optionValue,
            item.note
        );
    }
	
}
