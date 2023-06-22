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
package org.isf.patientportal.rest.api.patientrecord.dto;

import java.time.LocalDateTime;

import org.isf.patientportal.rest.api.patient.dto.PatientDto;
import org.isf.patientportal.rest.api.recordtype.dto.RecordTypeDto;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PatientRecordDto {

    private Long id;
	
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
	private LocalDateTime recordDate;
	
	private PatientDto patient;
	
	private RecordTypeDto recordType;
	
	private float value1;
	
	private float value2;
	
	private String optionValue;
	
	private String note;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
	private LocalDateTime created;
	
	public PatientRecordDto(LocalDateTime recordDate, PatientDto patient, RecordTypeDto recordType,
					float value1, float value2, String optionValue, String note) {
		this.recordDate = recordDate;
		this.patient = patient;
		this.recordType = recordType;
		this.value1 = value1;
		this.value2 = value2;
		this.optionValue = optionValue;
		this.note = note;
		this.created = LocalDateTime.now();
	}
}
