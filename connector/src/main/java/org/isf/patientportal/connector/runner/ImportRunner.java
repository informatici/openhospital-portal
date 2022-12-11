package org.isf.patientportal.connector.runner;


import org.isf.patientportal.connector.config.Configuration;

public class ImportRunner {
    public void syncPatient(int patientId) {
        System.out.println("Syncing patients");
    }

    public void run() {
        int numThreads = Configuration.PARALLEL;
        
        
    }


}
