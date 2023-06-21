package org.isf.patientportal.model.recordtype;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum BowelOption {

	REGULAR ("Regular"), 
	IRREGULAR("Irregular"), 
	CONSTIPATION("Constipation"), 
	DIARRHEAL("Diarrheal")
	;
	

	private String id;

	BowelOption(String id) {
        this.id = id;
    }


	@JsonValue
    public String getId() {
        return id;
    }

   @JsonCreator
    public static BowelOption fromId(String id) {
        for (BowelOption at : BowelOption.values()) {
            if (at.getId().equals(id)) {
                return at;
            }
        }
        return null;
    }
    
   
}
