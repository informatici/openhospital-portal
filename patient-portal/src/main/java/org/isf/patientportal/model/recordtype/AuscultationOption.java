package org.isf.patientportal.model.recordtype;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum AuscultationOption {

	NORMAL("Normal"), 
	WHEEZES("Wheezes"), 
	RHONCHI("Rhonchi"), 
	CRACKLES("Crackles"), 
	STRIDOR("Stridor"), 
	BRONCHIAL("Bronchial")
	;
	

	private String id;

	AuscultationOption(String id) {
        this.id = id;
    }


	@JsonValue
    public String getId() {
        return id;
    }

   @JsonCreator
    public static AuscultationOption fromId(String id) {
        for (AuscultationOption at : AuscultationOption.values()) {
            if (at.getId().equals(id)) {
                return at;
            }
        }
        return null;
    }
   
}
