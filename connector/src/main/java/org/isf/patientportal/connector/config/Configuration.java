package org.isf.patientportal.connector.config;

import org.springframework.beans.factory.annotation.Value;

public class Configuration {
    @Value("${oh.api.key}")
    public static String API_KEY = "1234567890";

    @Value("${oh.api.token}")
    public static String API_TOKEN = "1234567890";

    @Value("${oh.api.parallel}")
    public static int PARALLEL = 2;
    
}
