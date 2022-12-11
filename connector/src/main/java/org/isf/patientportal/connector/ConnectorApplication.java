package org.isf.patientportal.connector;


import org.isf.generaldata.GeneralData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@ImportResource({"classpath*:**/applicationContext.xml"})
@SpringBootApplication
public class ConnectorApplication implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(ConnectorApplication.class);
    
    public static void main(String[] args) {
        SpringApplication.run(ConnectorApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        logger.debug("Starting oh connector using config file");
        GeneralData.getGeneralData();
    }

}
