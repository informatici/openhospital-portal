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
package org.isf.patientportal.connector.common;

import java.util.ArrayList;

import org.isf.patientportal.connector.sync.common.SyncResult;

public class SyncReport {

    protected ArrayList<SyncResult> results;

    public SyncReport() {
        results = new ArrayList<SyncResult>();
    }

    
    public void addResult(SyncResult result) {
        results.add(result);
    }

    public ArrayList<SyncResult> getResults() {
        return results;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Sync report:\n");
        for (SyncResult result : results) {
            sb.append("Synced " + result.getObjectId() + "[" + result.getObjectType() + "] OP " + result.getOp().name() + " with result " + result.isSuccess() + " and message " + result.getMessage() + "\n");
            sb.append("\n");
        }
        return sb.toString();
    }
    
}
