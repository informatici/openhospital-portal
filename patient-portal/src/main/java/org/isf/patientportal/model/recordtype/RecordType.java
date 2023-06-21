/*
 * Open Hospital (www.open-hospital.org)
 * Copyright © 2006-2023 Informatici Senza Frontiere (info@informaticisenzafrontiere.org)
 *
 * Open Hospital is a free and open source software for healthcare data management.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * https://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
package org.isf.patientportal.model.recordtype;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
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


@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "RecordType")
public class RecordType {

	public enum MeasurementValueType {NUMERIC, OPTION}
	public enum MeasurementType {HEIGHT, WEIGHT, BLOOD_PRESSURE, HR, TEMPERATURE, SATURATION, HGT, RR, DIURESIS_VOL, DIURESIS, BOWEL, AUSCULTATION}
	//public enum DiuresisOption {PHYSIOLOGICAL, OLIGURIA, ANURIA, FEQUENT, NOCTURIA, STRANGURIA, HEMATURIA, PYURIA}
	//public enum BowelOption {REGULAR, IRREGULAR, CONSTIPATION, DIARRHEAL}
	//public enum AuscultationOption {NORMAL, WHEEZES, RHONCHI, CRACKLES, STRIDOR, BRONCHIAL}
	

    @GeneratedValue
    private Long id;
	
    @Id
	@NotNull
	@Column(length = 10)
	private String code;
	
	@Enumerated(EnumType.STRING)
	@NotNull
	private MeasurementValueType measurementValueType;
	
	@Enumerated(EnumType.STRING)
	@NotNull
	private MeasurementType measurementType;
	
	private String defaultOptionValue;
	
	private float defaultValue1;
	
	private float defaultValue2;
	
	private float minValue;
	
	private float maxValue;
	
	private String uom;

	
	public Long getId() {
		return id;
	}

	public String getCode() {
		return code;
	}
	
	public MeasurementValueType getMeasurementValueType() {
		return measurementValueType;
	}

	
	public MeasurementType getMeasurementType() {
		return measurementType;
	}

	
	public String getDefaultOptionValue() {
		switch(measurementType) {
			case DIURESIS:
				defaultOptionValue = DiuresisOption.PHYSIOLOGICAL.name();
				break;
			case BOWEL:
				defaultOptionValue = BowelOption.REGULAR.name();
				break;
			case AUSCULTATION:
				defaultOptionValue = AuscultationOption.NORMAL.name();
				break;
			default:
				defaultOptionValue = null;
		}
		return defaultOptionValue;
	}

	
	public float getDefaultValue1() {
		switch(measurementType) {
			//case HEIGHT: case WEIGHT: case HR: case DIURESIS_VOL:
			//	defaultValue1 = 0;
			//	break;
			case BLOOD_PRESSURE:
				defaultValue1 = 80;
				break;
			case TEMPERATURE:
				defaultValue1 = 36;
				break;
			case SATURATION:
				defaultValue1 = 98;
				break;
			case HGT:
				defaultValue1 = 80;
				break;
			case RR:
				defaultValue1 = 20;
				break;
			default:
				defaultValue1 = 0;
		}
		return defaultValue1;
	}
	
	
	public float getDefaultValue2() {
		switch(measurementType) {
			case BLOOD_PRESSURE:
				defaultValue2 = 120;
				break;
			default:
				defaultValue2 = 0;
		}
		return defaultValue2;
	}

	
	public float getMinValue() {
		return minValue;
	}

	
	public float getMaxValue() {
		return maxValue;
	}

	
	public String getUom() {
		return uom;
	}

	public RecordType updateWith(RecordType item) {
        return new RecordType(
            this.id,
            this.code,
            item.getMeasurementValueType(),
            item.getMeasurementType(),
            item.getDefaultOptionValue(),
            item.getDefaultValue1(),
            item.getDefaultValue2(),
            item.getMinValue(),
            item.getMaxValue(),
            item.getUom()
        );
    }

	
}
