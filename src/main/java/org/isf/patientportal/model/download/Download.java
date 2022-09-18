package org.isf.patientportal.model.download;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.isf.patientportal.model.patient.Patient;

import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
public class Download {
    @ManyToOne
    @JoinColumn(name="patient_id", nullable=false)
    private Patient patient;

    @Id
    @GeneratedValue
    private Long id;
    
    private String name;
    private String type;
    private String details;
    private String size;
    private String url;
    
    public Download() {
    }
    
    public Download(String name, String type, String size, String url, Patient patient) {
        this.patient = patient;
        this.name = name;
        this.type = type;
        this.size = size;
        this.url = url;
    }
    
    
}
