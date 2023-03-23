package org.isf.patientportal.connector.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ConnectorConfiguration {
    @Value("${oh.api.key}")
    public static String API_KEY = "1234567890";

    @Value("${oh.api.token}")
    public static String API_TOKEN = "1234567890";

    @Value("${oh.api.url}")
    public static String API_URL = "http://localhost:8080/patient-portal/api";

    @Value("${oh.api.parallel}")
    public static int PARALLEL = 2;
    
}
