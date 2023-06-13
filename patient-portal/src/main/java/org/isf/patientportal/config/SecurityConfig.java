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
package org.isf.patientportal.config;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.isf.patientportal.rest.auth.util.OHSimpleUrlAuthenticationSuccessHandler;
import org.isf.patientportal.security.RestAuthenticationEntryPoint;
import org.isf.patientportal.security.jwt.JWTConfigurer;
import org.isf.patientportal.security.jwt.TokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.autoconfigure.endpoint.web.CorsEndpointProperties;
import org.springframework.boot.actuate.autoconfigure.endpoint.web.WebEndpointProperties;
import org.springframework.boot.actuate.autoconfigure.web.server.ManagementPortType;
import org.springframework.boot.actuate.endpoint.ExposableEndpoint;
import org.springframework.boot.actuate.endpoint.web.EndpointLinksResolver;
import org.springframework.boot.actuate.endpoint.web.EndpointMapping;
import org.springframework.boot.actuate.endpoint.web.EndpointMediaTypes;
import org.springframework.boot.actuate.endpoint.web.ExposableWebEndpoint;
import org.springframework.boot.actuate.endpoint.web.WebEndpointsSupplier;
import org.springframework.boot.actuate.endpoint.web.annotation.ControllerEndpointsSupplier;
import org.springframework.boot.actuate.endpoint.web.annotation.ServletEndpointsSupplier;
import org.springframework.boot.actuate.endpoint.web.servlet.WebMvcEndpointHandlerMapping;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.access.expression.SecurityExpressionHandler;
import org.springframework.security.access.hierarchicalroles.RoleHierarchy;
import org.springframework.security.access.hierarchicalroles.RoleHierarchyImpl;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.FilterInvocation;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.expression.DefaultWebSecurityExpressionHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.util.StringUtils;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class SecurityConfig {

	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	private RestAuthenticationEntryPoint restAuthenticationEntryPoint;

	private TokenProvider tokenProvider;

	public SecurityConfig(TokenProvider tokenProvider) {
		this.tokenProvider = tokenProvider;
	}

	// @Override
	// protected void configure(AuthenticationManagerBuilder auth)
	// throws Exception {
	// auth.authenticationProvider(authenticationProvider());
	// }
	
	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}

	@Bean
	public DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
		authProvider.setUserDetailsService(userDetailsService);
		authProvider.setPasswordEncoder(encoder());
		return authProvider;
	}

	@Bean
	public PasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public CorsFilter corsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

		CorsConfiguration config = new CorsConfiguration();
		config.addAllowedHeader("*");
		// config.setAllowedHeaders(Arrays.asList("Accept", "Accept-Encoding", "Accept-Language", "Authorization", "Content-Type", "Cache-Control",
		// "Connection", "Cookie", "Host", "Pragma", "Referer, User-Agent"));
		config.setAllowedMethods(Arrays.asList("*"));
		// config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
		config.setAllowCredentials(true);
		// config.setAllowedOrigins(Arrays.asList("*"));
		config.addAllowedOriginPattern("*");
		config.setMaxAge(3600L);
		source.registerCorsConfiguration("/**", config);
		return new CorsFilter(source);
	}

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.sessionManagement()
						.sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
						.cors().and().csrf().disable()
						.authorizeRequests()
						.expressionHandler(webExpressionHandler())
						.and()
						.exceptionHandling()
						// .accessDeniedHandler(accessDeniedHandler)
						.authenticationEntryPoint(restAuthenticationEntryPoint)
						.and()
						.authorizeRequests()
						.antMatchers("/api/auth/**").permitAll()
						//.and()
						//.formLogin()
						//.loginPage("/api/auth/login").permitAll()
						//.successHandler(successHandler())
						//.failureHandler(failureHandler())
						.and()
						.apply(securityConfigurerAdapter())
						.and()
						.httpBasic()
						.and()
						.logout()
						.logoutUrl("/api/auth/logout")
						.permitAll();
		
		return http.build();
	}

	private JWTConfigurer securityConfigurerAdapter() {
		return new JWTConfigurer(tokenProvider);
	}

	@Bean
	public SimpleUrlAuthenticationFailureHandler failureHandler() {
		return new SimpleUrlAuthenticationFailureHandler();
	}

	@Bean
	public SimpleUrlAuthenticationSuccessHandler successHandler() {
		return new OHSimpleUrlAuthenticationSuccessHandler(tokenProvider);
	}

	@Bean
	public RoleHierarchy roleHierarchy() {
		RoleHierarchyImpl roleHierarchy = new RoleHierarchyImpl();
		String hierarchy = "ROLE_ADMIN > ROLE_FAMILYMANAGER \n ROLE_FAMILYMANAGER > ROLE_USER";
		roleHierarchy.setHierarchy(hierarchy);
		return roleHierarchy;
	}

	private SecurityExpressionHandler<FilterInvocation> webExpressionHandler() {
		DefaultWebSecurityExpressionHandler defaultWebSecurityExpressionHandler = new DefaultWebSecurityExpressionHandler();
		defaultWebSecurityExpressionHandler.setRoleHierarchy(roleHierarchy());
		return defaultWebSecurityExpressionHandler;
	}

	@Bean
	public WebMvcEndpointHandlerMapping webEndpointServletHandlerMapping(
					WebEndpointsSupplier webEndpointsSupplier, ServletEndpointsSupplier servletEndpointsSupplier,
					ControllerEndpointsSupplier controllerEndpointsSupplier,
					EndpointMediaTypes endpointMediaTypes, CorsEndpointProperties corsProperties, WebEndpointProperties webEndpointProperties,
					Environment environment) {
		List<ExposableEndpoint< ? >> allEndpoints = new ArrayList<ExposableEndpoint< ? >>();
		Collection<ExposableWebEndpoint> webEndpoints = webEndpointsSupplier.getEndpoints();
		allEndpoints.addAll(webEndpoints);
		allEndpoints.addAll(servletEndpointsSupplier.getEndpoints());
		allEndpoints.addAll(controllerEndpointsSupplier.getEndpoints());
		String basePath = webEndpointProperties.getBasePath();
		EndpointMapping endpointMapping = new EndpointMapping(basePath);
		boolean shouldRegisterLinksMapping = this.shouldRegisterLinksMapping(webEndpointProperties, environment, basePath);
		return new WebMvcEndpointHandlerMapping(endpointMapping, webEndpoints, endpointMediaTypes, corsProperties.toCorsConfiguration(),
						new EndpointLinksResolver(allEndpoints, basePath), shouldRegisterLinksMapping, null);
	}

	private boolean shouldRegisterLinksMapping(WebEndpointProperties webEndpointProperties, Environment environment, String basePath) {
		return webEndpointProperties.getDiscovery().isEnabled()
						&& (StringUtils.hasText(basePath) || ManagementPortType.get(environment).equals(ManagementPortType.DIFFERENT));
	}
}