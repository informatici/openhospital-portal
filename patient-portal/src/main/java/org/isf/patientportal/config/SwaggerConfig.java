
package org.isf.patientportal.config;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.service.SecurityScheme;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

	@Value("${api.host:localhost:8080}")
	String host;

	@Value("${api.protocol:http}")
	String protocol;

    @Bean
    public Docket apiDocket() {

        List<SecurityScheme> securitySchemes = Arrays.asList(new ApiKey("JWT", "Authorization", "header"));

        ApiInfo apiInfo = new ApiInfo("OH Patient Portal Api Documentation", "OH Patient Portal Api Documentation", "1.0", "urn:tos", ApiInfo.DEFAULT_CONTACT, "Apache 2.0", "https://www.apache.org/licenses/LICENSE-2.0", new ArrayList());

        Set<String> protocols = new HashSet<>();
        protocols.add(protocol);


        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo)
                .host(host)
                .protocols(protocols)
                .select()
                .apis(RequestHandlerSelectors.basePackage("org.isf.patientportal.rest"))
                //.apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build()
                .securityContexts(Arrays.asList(jwtSecurityContext()))
                .securitySchemes(securitySchemes);
    }

    private SecurityContext jwtSecurityContext() {
        return SecurityContext
                .builder()
                .securityReferences(defaultAuth())
                .forPaths(PathSelectors.regex("^(?!(\\/auth\\/login)).*$"))
                .build();
    }

    List<SecurityReference> defaultAuth() {
        return Arrays.asList(new SecurityReference("JWT", new AuthorizationScope[0]));
    }

}