package org.isf.patientportal.model.patientrecord;

import java.util.Optional;

import org.isf.patientportal.model.recordtype.RecordType.MeasurementType;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.util.Streamable;


public interface PatientRecordRepository extends CrudRepository<PatientRecord, Long> {
	
	/***************** GENERIC **********************/

	Optional<PatientRecord> findById(Long id);
	
	Streamable<PatientRecord> findAll();
	
	//Streamable<PatientRecord> findByMeasurement(Measurement measurement);
	
	//PatientRecord create(PatientRecord patientRecord);
	
	//PatientRecord update(PatientRecord patientRecord, Long id);

	
	/***************** BY PATIENT **********************/
	
	//@Query("from Auction a join a.category c where c.name=:categoryName")
	//public Iterable<Auction> findByCategory(@Param("categoryName") String categoryName);
	
	@Query("select r from PatientRecord r where r.patient = ?1")
	Streamable<PatientRecord> findByPatientId(Long patientId);
	
	@Query("select r from PatientRecord r where r.patient = ?1 and r.recordType.measurementType = ?2")
	Streamable<PatientRecord> findByPatientIdMeasurementType(Long patientId, MeasurementType measurementType);

}
