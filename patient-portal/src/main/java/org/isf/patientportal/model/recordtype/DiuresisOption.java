package org.isf.patientportal.model.recordtype;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonValue;

@JsonFormat(shape=JsonFormat.Shape.OBJECT)
public enum DiuresisOption {

	PHYSIOLOGICAL("Physiological"),
	OLIGURIA("Oliguria"),
	ANURIA("Anuria"),
	FREQUENT("Frequent"),
	NOCTURIA("Nocturia"),
	STRANGURIA("Stranguria"),
	HEMATURIA("Hematuria"),
	PYURIA("Pyuria")
	;
	

	private String id;

	DiuresisOption(String id) {
        this.id = id;
    }


	@JsonValue
    public String getId() {
        return id;
    }

   @JsonCreator
    public static DiuresisOption fromId(String id) {
        for (DiuresisOption at : DiuresisOption.values()) {
            if (at.getId().equals(id)) {
                return at;
            }
        }
        return null;
    }
    
}
