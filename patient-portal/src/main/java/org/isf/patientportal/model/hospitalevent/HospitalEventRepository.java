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

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.util.Streamable;

public interface HospitalEventRepository extends CrudRepository<HospitalEvent, Long> {

	@Query("select r from HospitalEvent r")
	Streamable<HospitalEvent> findAll();
	
	@Query("select r from HospitalEvent r where r.patient.id = ?1")
	Streamable<HospitalEvent> findByPatientId(Long patientId);
	
	@Query("select r from HospitalEvent r where r.patient.id = ?1 and r.eventType.code = ?2")
	Streamable<HospitalEvent> findByPatientIdEventTypeCode(Long patientId, String eventTypeCode);

	@Query("select count(*) from HospitalEvent r where r.patient.id = ?1")
	Long countByPatientId(Long patientId);
	
	@Query("select count(*) from HospitalEvent r where r.patient.id = ?1 and r.readDate is not null")
	Long countReadByPatientId(Long patientId);
	
	@Query("select count(*) from HospitalEvent r where r.patient.id = ?1 and r.eventType.code = ?2")
	Long countByPatientIdEventTypeCode(Long patientId, String eventTypeCode);
	
	@Query("select count(*) from HospitalEvent r where r.patient.id = ?1 and r.eventType.code = ?2 and r.readDate is not null")
	Long countReadByPatientIdEventTypeCode(Long patientId, String eventTypeCode);
}
