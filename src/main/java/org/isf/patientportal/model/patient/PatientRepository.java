package org.isf.patientportal.model.patient;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PatientRepository extends CrudRepository<Patient, Long> {
    
}
