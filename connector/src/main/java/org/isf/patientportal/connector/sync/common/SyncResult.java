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
