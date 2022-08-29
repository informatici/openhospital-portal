package org.isf.patientportal.persona;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
class PersonaSetting {
    
    @Column(name = "name", nullable = false)
    private String settingName;

    @Column(name = "value", nullable = false)
    private String settingValue;

    @ManyToOne
    @JoinColumn(name ="persona_id", nullable = false)
    private Persona persona;

}