package org.isf.patientportal.model.recordtype;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.util.Streamable;

public interface RecordTypeRepository extends CrudRepository<RecordType, Long> {
	
	RecordType findByMeasurement(RecordType.Measurement m);
	
	Streamable<RecordType> findAll();

}
