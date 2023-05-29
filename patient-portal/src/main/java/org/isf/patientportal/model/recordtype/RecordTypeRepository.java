package org.isf.patientportal.model.recordtype;

import org.isf.patientportal.model.recordtype.RecordType.MeasurementType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.util.Streamable;

public interface RecordTypeRepository extends CrudRepository<RecordType, Long> {
	
	RecordType findByMeasurementType(MeasurementType m);
	
	Streamable<RecordType> findAll();

}
