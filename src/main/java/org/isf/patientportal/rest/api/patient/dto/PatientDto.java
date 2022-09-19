package org.isf.patientportal.rest.api.patient.dto;


import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class PatientDto {
    
    private Long id;
    
    private String firstName;
    
    private String secondName;

    private String name;
    
    private LocalDate birthDate;

	private int age;

	private String agetype;

	private char sex;
	
	private String address;

	private String city;
	
	private String nextKin;
	
	private String telephone;
	
	private String note;
}