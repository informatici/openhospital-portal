package org.isf.patientportal.model.patient;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.validation.constraints.NotNull;

import org.isf.patientportal.model.user.User;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import java.time.LocalDate;

@Getter
@Setter
@Entity
public class Patient {
    @Id
    @GeneratedValue
    private Long id;
    
    @NotNull
    private String firstName;
    
    @NotNull
    private String secondName;

    @NotNull
    private String name;
    
    @NotNull
    private LocalDate birthDate;

	@NotNull
	private int age;

	@NotNull
	private String agetype;

	@NotNull
	private char sex;
	
	private String address;

	@NotNull
	private String city;
	
	private String nextKin;
	
	private String telephone;
	
	private String note;

    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    private User user;

}