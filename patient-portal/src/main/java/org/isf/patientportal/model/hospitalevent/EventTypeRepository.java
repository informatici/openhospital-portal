package org.isf.patientportal.model.hospitalevent;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.util.Streamable;

public interface EventTypeRepository extends CrudRepository<EventType, Long> {

	Streamable<EventType> findAll();
	
	Optional<EventType> findByCode(String code);
	
}
