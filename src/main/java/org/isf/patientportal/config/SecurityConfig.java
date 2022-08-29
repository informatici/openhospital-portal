
package org.isf.patientportal.config;

import java.util.Arrays;

import org.isf.patientportal.security.OHSimpleUrlAuthenticationSuccessHandler;
import org.isf.patientportal.security.RestAuthenticationEntryPoint;
import org.isf.patientportal.security.jwt.JWTConfigurer;
import org.isf.patientportal.security.jwt.TokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
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
	//   throws Exception {
	//     auth.authenticationProvider(authenticationProvider());
	// }
	
	@Bean
	public DaoAuthenticationProvider authenticationProvider() {
	    DaoAuthenticationProvider authProvider
	      = new DaoAuthenticationProvider();
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
        // config.setAllowedHeaders(Arrays.asList("Accept", "Accept-Encoding", "Accept-Language", "Authorization", "Content-Type", "Cache-Control", "Connection", "Cookie", "Host", "Pragma", "Referer, User-Agent"));
        config.setAllowedMethods(Arrays.asList("*"));
        // config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        config.setAllowCredentials(true);
        config.setAllowedOrigins(Arrays.asList("*"));
        config.setMaxAge(3600L);
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.sessionManagement()
		    .sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
			.cors()
			.and()
			.csrf()
				.disable()
					.authorizeRequests()
            .and()
            .exceptionHandling()
            	//.accessDeniedHandler(accessDeniedHandler)
            	.authenticationEntryPoint(restAuthenticationEntryPoint)
            .and()
            .authorizeRequests()
            	.antMatchers("/auth/**").permitAll()
            	.antMatchers(HttpMethod.POST, "/personas/**").hasAnyAuthority("admin", "owner")
            	.antMatchers(HttpMethod.PUT, "/personas/**").hasAnyAuthority("admin", "owner")
            	.antMatchers(HttpMethod.DELETE, "/personas/**").hasAnyAuthority("admin", "owner")
            	.antMatchers(HttpMethod.PATCH, "/personas/**").hasAnyAuthority("admin", "owner")
            	.antMatchers(HttpMethod.GET, "/personas/**").hasAnyAuthority("admin", "owner")
                // downloads
            	.antMatchers(HttpMethod.POST, "/downloads/**").hasAnyAuthority("admin", "owner")
            	.antMatchers(HttpMethod.PUT, "/downloads/**").hasAnyAuthority("admin", "owner")
            	.antMatchers(HttpMethod.DELETE, "/downloads/**").hasAnyAuthority("admin", "owner")
            	.antMatchers(HttpMethod.GET, "/downloads/**").hasAnyAuthority("admin", "owner")
                
				// //opd
				// .antMatchers(HttpMethod.POST, "/opds/**").permitAll()
				// .antMatchers(HttpMethod.PUT, "/opds/**").permitAll()
				// .antMatchers(HttpMethod.DELETE, "/opds/**").permitAll()
				// .antMatchers(HttpMethod.PATCH, "/opds/**").permitAll()
				// .antMatchers(HttpMethod.GET, "/opds/**").hasAnyAuthority("admin", "owner")
            	
            .and()
          	.formLogin()
          		.loginPage("/auth/login")
            		.successHandler(successHandler())
            		.failureHandler(failureHandler())
            .and()
			.apply(securityConfigurerAdapter())
			.and()
            .httpBasic()
            .and()
          	.logout()
				.logoutUrl("/auth/logout")
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
}