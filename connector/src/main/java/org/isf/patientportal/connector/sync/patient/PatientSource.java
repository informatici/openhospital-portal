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
