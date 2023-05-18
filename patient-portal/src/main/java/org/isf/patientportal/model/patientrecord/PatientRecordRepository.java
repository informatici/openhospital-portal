package org.isf.patientportal.model.patientrecord;

import java.util.Optional;

import org.isf.patientportal.model.recordtype.RecordType.Measurement;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.util.Streamable;


public interface PatientRecordRepository extends CrudRepository<PatientRecord, Long> {
	
	/***************** GENERIC **********************/

	Optional<PatientRecord> findById(Long id);
	
	Streamable<PatientRecord> findAll();
	
	Streamable<PatientRecord> findByMeasurement(Measurement measurement);
	
	PatientRecord create(PatientRecord patientRecord);
	
	PatientRecord update(PatientRecord patientRecord, Long id);

	
	/***************** BY PATIENT **********************/
	
	Streamable<PatientRecord> findByPatientId(Long patientId);
	
	Streamable<PatientRecord> findByPatientIdMeasurement(Long patientId, Measurement measurement);

}
