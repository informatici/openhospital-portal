package org.isf.patientportal.persona;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.validation.constraints.NotNull;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
class Persona {
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
    private String email;
    
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

    @OneToMany(mappedBy = "persona", cascade = CascadeType.ALL)
    private List<PersonaSetting> personaSettings = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getAgetype() {
        return agetype;
    }

    public void setAgetype(String agetype) {
        this.agetype = agetype;
    }

    public char getSex() {
        return sex;
    }

    public void setSex(char sex) {
        this.sex = sex;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getNextKin() {
        return nextKin;
    }

    public void setNextKin(String nextKin) {
        this.nextKin = nextKin;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public List<PersonaSetting> getPersonaSettings() {
        return personaSettings;
    }

    public void setPersonaSettings(List<PersonaSetting> personaSettings) {
        this.personaSettings = personaSettings;
    }

}