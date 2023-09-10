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
package org.isf.patientportal.model.patientrecord;

import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import org.isf.patientportal.model.patient.Patient;
import org.isf.patientportal.model.recordtype.RecordType;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity(name = "PatientRecord")
public class PatientRecord {
	
	@Id
    @GeneratedValue
    private Long id;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
	@NotNull
	private LocalDateTime recordDate;
	
	@ManyToOne
    @NotNull
	private Patient patient;
	
	@OneToOne
	@NotNull
	@JoinColumn(referencedColumnName = "code")
	private RecordType recordType;
	
	private float value1;
	
	private float value2;
	
	@Column(nullable = true)
	private String optionValue;
	
	private String note;
	
	@Column(nullable = false, updatable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
    private Date created = new Date();
	
	
	public PatientRecord(Long id, 
					@NotNull LocalDateTime date, 
					@NotNull Patient patient, 
					@NotNull RecordType recordType, 
					float value1, 
					float value2,
					String optionValue, 
					String note) {
		this.id = id;
		this.recordDate = date;
		this.patient = patient;
		this.recordType = recordType;
		this.value1 = value1;
		this.value2 = value2;
		this.optionValue = optionValue;
		this.note = note;
		this.created = Calendar.getInstance().getTime();
	}

	
	/***
	 * Updates the saved item with the one passed as parameter
	 * @param item
	 * @return updated item if the IDs match, null otherwise
	 */
	public PatientRecord updateWith(PatientRecord item) {
		if(this.id == item.getId()) {
	        this.recordDate = item.recordDate;
	        this.patient = item.patient;
	        this.recordType = item.recordType;
	        this.value1 = item.value1;
	        this.value2 = item.value2;
	        this.optionValue = item.optionValue;
	        this.note = item.note;
			return this;
		}
		return null;
    }
	
}
