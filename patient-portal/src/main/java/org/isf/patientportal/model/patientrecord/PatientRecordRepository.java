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

import org.isf.patientportal.model.recordtype.RecordType.MeasurementType;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.util.Streamable;


public interface PatientRecordRepository extends CrudRepository<PatientRecord, Long> {
	
	Streamable<PatientRecord> findAll();
	
	@Query("select r from PatientRecord r where r.patient.id = ?1")
	Streamable<PatientRecord> findByPatientId(Long patientId);
	
	@Query("select r from PatientRecord r where r.patient.id = ?1 and r.recordType.measurementType = ?2")
	Streamable<PatientRecord> findByPatientIdMeasurementType(Long patientId, MeasurementType measurementType);

	@Query("select count(*) from PatientRecord r where r.patient.id = ?1")
	Long countByPatientId(Long patientId);
}
