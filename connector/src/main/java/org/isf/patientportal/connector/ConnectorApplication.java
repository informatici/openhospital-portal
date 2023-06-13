/*
 * Open Hospital (www.open-hospital.org)
 * Copyright © 2006-2023 Informatici Senza Frontiere (info@informaticisenzafrontiere.org)
 *
 * Open Hospital is a free and open source software for healthcare data management.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * https://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
package org.isf.patientportal.connector;


import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;

import org.isf.patientportal.connector.common.SyncReport;
import org.isf.patientportal.connector.config.ConnectorConfiguration;
import org.isf.patientportal.connector.sync.common.SyncResult;
import org.isf.patientportal.connector.sync.patient.PatientSource;
import org.isf.patientportal.connector.sync.patient.PatientSyncer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ImportResource;

@ImportResource({"classpath*:**/applicationContext.xml"})
@SpringBootApplication
public class ConnectorApplication implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(ConnectorApplication.class);
    
    @Autowired
    private PatientSource patientSource;


    public static void main(String[] args) {
        SpringApplication.run(ConnectorApplication.class, args);
    }

    @Bean
    protected PatientSyncer patientSyncer() {
        return new PatientSyncer();
    }

    @Override
    public void run(String... args) throws Exception {
        logger.info("Starting oh connector using config ");
        logger.info("Api url " + ConnectorConfiguration.API_URL);
        logger.info("Using " + ConnectorConfiguration.PARALLEL + " threads");

        ExecutorService executor = Executors.newFixedThreadPool(ConnectorConfiguration.PARALLEL);
        List<Integer> patientIds = patientSource.getPatientIds();
        logger.info("Found " + patientIds.size() + " patients to sync");
        List<Callable<SyncResult>> patientsToSync = new ArrayList<Callable<SyncResult>>();
        for (Integer patientId : patientIds) {
            PatientSyncer patientSyncer = new PatientSyncer(patientId);
            patientSyncer.setPatientManager(patientSource.getPatientManager());
            patientsToSync.add(patientSyncer);
        }
        List<Future<SyncResult>> results = executor.invokeAll(patientsToSync);
        executor.shutdown();
        
        SyncReport report = new SyncReport();
        for (Future<SyncResult> future : results) {
            SyncResult result = future.get();
            report.addResult(result);
        }

        logger.info("Sync report: " + report);
        
    }

}
