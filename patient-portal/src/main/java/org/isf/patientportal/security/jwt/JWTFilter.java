/*
 * Open Hospital (www.open-hospital.org)
 * Copyright © 2006-2022 Informatici Senza Frontiere (info@informaticisenzafrontiere.org)
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
package org.isf.patientportal.security.jwt;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import org.isf.patientportal.security.UserDetailsServiceImpl;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.GenericFilterBean;

/**
 * Filters incoming requests and installs a Spring Security principal if a header corresponding to a valid user is
 * found.
 */
public class JWTFilter extends GenericFilterBean {

	public static final String AUTHORIZATION_HEADER = "Authorization";

	private UserDetailsServiceImpl userDetailsService;
	
	private final TokenProvider tokenProvider;

	public JWTFilter(TokenProvider tokenProvider, UserDetailsServiceImpl userDetailsService) {
		this.tokenProvider = tokenProvider;
		this.userDetailsService = userDetailsService;
	}

	@Override
	public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
			throws IOException, ServletException {
		HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
		String jwt = resolveToken(httpServletRequest);

        if (StringUtils.hasText(jwt) && this.tokenProvider.validateToken(jwt) && !this.tokenProvider.isTokenExpired(jwt)) {
        	
          /*String username = tokenProvider.getUsernameFromToken(jwt);

          UserDetailsImpl userDetails = userDetailsService.loadUserByUsername(username);
          System.out.println("Username: " + username);
          System.out.println("User id: " + userDetails.getId());
          UsernamePasswordAuthenticationToken authentication =
              new UsernamePasswordAuthenticationToken(
                  userDetails,
                  null,
                  userDetails.getAuthorities());
          authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpServletRequest));
          */
          Authentication authentication = this.tokenProvider.getAuthentication(jwt, userDetailsService);	
          SecurityContextHolder.getContext().setAuthentication(authentication);
		}        	        
        	        
		filterChain.doFilter(servletRequest, servletResponse);
	}

	private String resolveToken(HttpServletRequest request) {
		String bearerToken = request.getHeader(AUTHORIZATION_HEADER);
		if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
			return bearerToken.substring(7);
		}
		return null;
	}
	
}
