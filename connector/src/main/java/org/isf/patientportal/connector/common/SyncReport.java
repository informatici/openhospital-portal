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
