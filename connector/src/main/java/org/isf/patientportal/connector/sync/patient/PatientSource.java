package org.isf.patientportal.connector.sync.patient;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

import org.isf.patient.manager.PatientBrowserManager;
import org.isf.patient.model.Patient;
import org.isf.utils.exception.OHServiceException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
public class PatientSource {
    @Autowired
    protected PatientBrowserManager patientManager;

    private static final Logger logger = LoggerFactory.getLogger(PatientSource.class);
    
    public PatientSource() {
    }

    public PatientBrowserManager getPatientManager() {
        return patientManager;
    }

    public void setPatientManager(PatientBrowserManager patientManager) {
        this.patientManager = patientManager;
    }

    public List<Integer> getPatientIds() throws PatientSourceException {
        logger.info("Reading patient ids from open hospital database");
        logger.info("Manager is " + patientManager);
        try {
            
            return patientManager.getPatient().stream()
                .map(Patient::getCode)
                .collect(Collectors.toList());
        } catch (OHServiceException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            throw new PatientSourceException(e);
        }
        
    }


}
