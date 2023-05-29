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

}
