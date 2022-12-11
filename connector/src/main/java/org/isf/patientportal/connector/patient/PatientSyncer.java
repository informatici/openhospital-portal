package org.isf.patientportal.connector.patient;

import org.isf.patient.manager.PatientBrowserManager;
import org.isf.patient.model.Patient;
import org.isf.utils.exception.OHServiceException;
import org.springframework.beans.factory.annotation.Autowired;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PatientSyncer implements Runnable {
    private int patientId;

    @Autowired
	protected PatientBrowserManager patientManager;

    private static final Logger logger = LoggerFactory.getLogger(PatientSyncer.class);

    public PatientSyncer(int patientId) {
        this.patientId = patientId;

    }

    @Override
    public void run() {
        // TODO Auto-generated method stub
        logger.debug("Syncing patient with id: " + patientId);
        try {
            Patient patient = patientManager.getPatientById(patientId);
            
            System.out.println(patient.getSecondName());
        } catch (OHServiceException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
