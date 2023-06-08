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

}
