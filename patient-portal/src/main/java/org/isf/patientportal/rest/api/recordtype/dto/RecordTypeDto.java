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
package org.isf.patientportal.rest.api.recordtype.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RecordTypeDto {

	private Long id;
	
	@ApiModelProperty(allowableValues = "NUMERIC, OPTION")
	private String measurementValueType;
	
	@ApiModelProperty(allowableValues = "HEIGHT, WEIGHT, BLOOD_PRESSURE, HR, TEMPERATURE, SATURATION, HGT, RR, DIURESIS_VOL, DIURESIS, BOWEL, AUSCULTATION")
	private String measurementType;
	
	private String defaultOptionValue;
	
	private float defaultValue1;
	
	private float defaultValue2;
	
	private float minValue;
	
	private float maxValue;
	
	private String uom;

	
}
