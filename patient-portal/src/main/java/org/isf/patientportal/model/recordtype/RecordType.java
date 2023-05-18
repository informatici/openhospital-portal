package org.isf.patientportal.model.recordtype;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;


/* Tipologie di dato e unità di misura:
 *  - Height (cm)
   		HEIGHT_MIN = 0
		HEIGHT_MAX = 250
		HEIGHT_INIT = 0
		HEIGHT_STEP = 1
 *  - Weight (Kg)
   		WEIGHT_MIN = 0
		WEIGHT_MAX = 200
		WEIGHT_INIT = 0
		WEIGHT_STEP = 0.1
 *  - Blood Pressure (mmHg) --> min e max
   		AP_MIN_INIT = 80
		AP_MAX_INIT = 120
 *  - Heart Rate (bpm)
   		HR_MIN = 0
		HR_MAX = 240
		HR_INIT = 60
 *  - Temperature (°C)
  		TEMP_INIT = 36
		TEMP_MIN = 30
		TEMP_MAX = 50
		TEMP_STEP = 0.1
 *  - Saturation (%)
   		SAT_INIT = 98
		SAT_MIN = 50
		SAT_MAX = 100
		SAT_STEP = 0.1
 *  - HGT Hemo Glucose Test (mg/dl)
  		HGT_MIN = 30
		HGT_MAX = 600
		HGT_INIT = 80
 *  - Respiratory rate (apm)
   		RR_INIT = 20
		RR_MIN = 0
		RR_MAX = 100
 *  - Diuresis vol h24 (ml)
   		DIURESIS_MIN = 0
		DIURESIS_MAX = 2500
		DIURESIS_INIT = 100
 *  - Diuresis 
 		VALUES: physiological, oliguria, anuria, fequent, nocturia, stranguria, hematuria, pyuria
 		DIURESIS_DESC_INIT = physiological
 *  - Bowel Function (Alvo)
		VALUES: regular, irregular, constipation, diarrheal
		BOWEL_DESC_INIT = regular
 *  - Auscultation: 
   		VALUES: normal, wheezes, rhonchi, crackles, stridor, bronchial 
   		AUSCULTATION_INIT = normal
 * */

@Getter
@Setter
@Entity
public class RecordType {

	public enum MeasurementType {NUMERIC, OPTION}
	public enum Measurement {HEIGHT, WEIGHT, BP, HR, TEMPERATURE, SATURATION, HGT, RR, DIURESIS_VOL, DIURESIS, BOWEL, AUSCULTATION}

	
	@Id
    @GeneratedValue
    private Long id;
	
	@NotNull
	private Measurement measurement;
	
	@NotNull
	private MeasurementType mType;
	
	private String description;
	
	@NotNull
	private float defaultValue;
	
	private float minValue;
	
	private float maxValue;
	
	@NotNull
	private String uom;

}
