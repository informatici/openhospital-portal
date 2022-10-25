package org.isf.patientportal.model.patient;


import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.JoinColumn;

import java.time.LocalDate;
import java.util.Date;

import org.isf.patientportal.model.user.User;

@Entity
@Getter
@Setter
public class Patient {
    @OneToOne
    @NotNull
    @JoinColumn(name = "user_id")
    private User patient;

    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    private String firstName;

    @NotNull
    private String secondName;

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

    @NotNull
    private String telephone;

    private String note;
    
    @Column(nullable = false, updatable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
    private Date created = new Date();
    
}
