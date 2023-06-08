package org.isf.patientportal.model.hospitalevent;

import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
//import javax.persistence.Lob;
import javax.persistence.OneToOne;
//import javax.sql.rowset.serial.SerialBlob;
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
	
	@Column(nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
	private LocalDateTime date;
	
	@OneToOne
	@NotNull
	@JoinColumn(name = "patient_id")
	private Patient patient;
	
	@OneToOne
	@NotNull
	@JoinColumn(referencedColumnName = "code")
	private EventType eventType;
	
	private String payload;

	///documento OneToMany
	//@Lob
	//private Blob blob;
	
	@Column(nullable = false, updatable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
    private Date created = new Date();
	

	
	public HospitalEvent() {
		super();
	}
	
	
	public HospitalEvent(Long id, 
					@NotNull LocalDateTime date, 
					@NotNull Patient patient, 
					@NotNull EventType eventType, 
					String payload) {
		this.id = id;
		this.date = date;
		this.patient = patient;
		this.eventType = eventType;
		this.payload = payload;
		this.created = Calendar.getInstance().getTime();
	}
	
	
	public HospitalEvent updateWith(HospitalEvent item) {
        return new HospitalEvent(
            this.id,
            item.date,
            item.patient,
            item.eventType,
            item.payload
        );
    }
	
}
