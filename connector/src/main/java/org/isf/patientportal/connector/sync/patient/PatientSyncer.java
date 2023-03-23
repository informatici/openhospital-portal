package org.isf.patientportal.connector.sync.patient;

import java.util.concurrent.Callable;

import org.isf.patient.manager.PatientBrowserManager;
import org.isf.patient.model.Patient;
// import org.isf.patientportal.client.v1.api.AuthApi;
// import org.isf.patientportal.client.v1.api.PatientsApi;
// import org.isf.patientportal.client.v1.api.UserApi;
// import org.isf.patientportal.client.v1.model.PatientDto;
// import org.isf.patientportal.client.v1.model.User;
import org.isf.patientportal.connector.sync.common.SyncResult;
import org.isf.utils.exception.OHServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
public class PatientSyncer implements Callable<SyncResult> {
    private int patientId;
    private String apiKey;

    @Autowired
	protected PatientBrowserManager patientManager;

    // @Autowired
    // protected PatientsApi patientsApi;

    // @Autowired
    // protected UserApi userApi;

    private static final Logger logger = LoggerFactory.getLogger(PatientSyncer.class);

    public PatientSyncer() {
    }
    
    public PatientSyncer(int patientId) {
        this.patientId = patientId;
    }

    public int getPatientId() {
        return patientId;
    }

    public void setPatientId(int patientId) {
        this.patientId = patientId;
    }

    public PatientBrowserManager getPatientManager() {
        return patientManager;
    }

    public void setPatientManager(PatientBrowserManager patientManager) {
        this.patientManager = patientManager;
    }

    public String getApiKey() {
        return apiKey;
    }

    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }

    protected SyncResult syncPatient(Patient patient) {
        logger.debug("Syncing patient with id: " + patientId);
        logger.info("Checking patient with name: " + patient.getFirstName() + " " + patient.getSecondName());
        // set api key
        // User userDto = PatientMapper.mapPatientToUser(patient);
        // logger.info("User: " + userDto.toString());
        // userApi.createUserUsingPOST(userDto);
        // PatientDto patientDto = PatientMapper.mapPatientToPatientDto(patient);
        // patientDto.setUsers(userDto);
        // logger.info("PatientDto: " + patientDto.toString());
        // patientsApi.createPatientUsingPOST(patientDto);
        return new SyncResult(patientId, "patient", true, "Patient synced successfully", SyncResult.Op.CREATE);
    }

    @Override
    public SyncResult call() throws Exception {
        // TODO Auto-generated method stub
        logger.debug("Syncing patient with id: " + patientId);
        try {
            Patient patient = patientManager.getPatientById(patientId);
            return syncPatient(patient);
        } catch (OHServiceException e) {
            // TODO Auto-generated catch block
            logger.error("Error syncing patient", e);
            return new SyncResult(patientId, "patient", false, "Patient sync failed: " + e.getMessage(), SyncResult.Op.ERROR);
        }
    }
}
