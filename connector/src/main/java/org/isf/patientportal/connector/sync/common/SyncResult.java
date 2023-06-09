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
package org.isf.patientportal.connector.sync.common;


public class SyncResult {

    public enum Op {
        NOOP, UPDATE, CREATE, DELETE, ERROR
    }

    private int objectId;
    private String objectType;
    private boolean success;
    private String message;
    private Op resultType;

    public SyncResult() {
    }

    public SyncResult(int objectId, String objectType, boolean success, String message, Op resultType) {
        this.objectId = objectId;
        this.objectType = objectType;
        this.success = success;
        this.message = message;
        this.resultType = resultType;
    }
    
    public int getObjectId() {
        return objectId;
    }
    public void setObjectId(int objectId) {
        this.objectId = objectId;
    }
    public String getObjectType() {
        return objectType;
    }
    public void setObjectType(String objectType) {
        this.objectType = objectType;
    }
    public boolean isSuccess() {
        return success;
    }
    public void setSuccess(boolean success) {
        this.success = success;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public Op getOp() {
        return resultType;
    }
    public void setOp(Op resultType) {
        this.resultType = resultType;
    }
}
