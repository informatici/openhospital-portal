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
package org.isf.patientportal.model.hospitalevent;

import java.time.LocalDateTime;
import java.time.ZoneId;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
//import javax.persistence.Lob;
import javax.persistence.OneToOne;
//import javax.sql.rowset.serial.SerialBlob;
import javax.validation.constraints.NotNull;

import org.isf.patientportal.model.patient.Patient;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;

/**
 * @author mibem
 *
 */
@Getter
@Setter
@Entity
public class HospitalEvent {

	@Id
	@GeneratedValue
	private Long id;

	@Column(nullable = false)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
	private LocalDateTime date;

	@OneToOne
	@NotNull
	@JoinColumn(name = "patient_id")
	private Patient patient;

	@OneToOne
	@NotNull
	@JoinColumn(referencedColumnName = "code")
	private EventType eventType;

	@Column(columnDefinition = "TEXT")
	private String payload;

	/// document OneToMany
	// @Lob
	// private Blob blob;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
	private LocalDateTime readDate;
	
	@Column(nullable = false, updatable = false)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
	private @NotNull LocalDateTime created = LocalDateTime.now(ZoneId.of("UTC"));
	

	public HospitalEvent() {
		super();
	}

	public HospitalEvent(Long id,
					@NotNull LocalDateTime date,
					@NotNull Patient patient,
					@NotNull EventType eventType,
					String payload) {
		this.id = id;
		this.date = date;
		this.patient = patient;
		this.eventType = eventType;
		this.payload = payload;
		this.created = LocalDateTime.now(ZoneId.of("UTC"));
	}


	/***
	 * Updates the saved item with the one passed as parameter
	 * @param item
	 * @return updated item if the IDs match, null otherwise
	 */
	public HospitalEvent updateWith(HospitalEvent item) {
		if(this.id == item.getId()) {
			this.date = item.date;
			this.patient = item.patient;
			this.eventType = item.eventType;
			this.readDate = item.readDate;
			this.payload = item.payload;
			return this;
		}
		return null;
	}

}
