/*
 * Open Hospital (www.open-hospital.org)
 * Copyright © 2006-2021 Informatici Senza Frontiere (info@informaticisenzafrontiere.org)
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
package org.isf.patientportal.security.jwt;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.isf.patientportal.constant.JWTConstants;

@Slf4j
@Component
public class TokenProvider implements Serializable, InitializingBean {

    @Value("${jwt.header.string}")
    public static String HEADER_STRING;

    @Value("${jwt.token.prefix}")
    public static String TOKEN_PREFIX;

    @Value("${jwt.token.secret}")
    public String SECRET;

    
    private Key key;
    
    @Override
    public void afterPropertiesSet() {
        log.info("Initializing JWT key with secret: {}", SECRET);
        // byte[] keyBytes = Decoders.BASE64.decode(SECRET);
        byte[] keyBytes = SECRET.getBytes(StandardCharsets.UTF_8);
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }

    public String getUsernameFromToken(String token) {
        return getClaimFromToken(token, Claims::getSubject);
    }

    public Date getExpirationDateFromToken(String token) {
        return getClaimFromToken(token, Claims::getExpiration);
    }

    public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }

    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(this.key)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public Boolean isTokenExpired(String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }

    public String createToken(Authentication authentication, boolean rememberMe) {
        final String authorities = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));
        
        long now = System.currentTimeMillis();
        Date validity;
        if (rememberMe) {
            validity = new Date(now + JWTConstants.ACCESS_TOKEN_VALIDITY_SECONDS_FOR_REMEMBERME*1000);
        } else {
            validity = new Date(now + JWTConstants.ACCESS_TOKEN_VALIDITY_SECONDS*1000);
        }
        
        return Jwts.builder()
                .setSubject(authentication.getName())
                .claim(JWTConstants.AUTHORITIES_KEY, authorities)
                .signWith(this.key)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(validity)
                .compact();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
          } catch (MalformedJwtException e) {
            log.error("Invalid JWT token: {}", e.getMessage());
          } catch (ExpiredJwtException e) {
            log.error("JWT token is expired: {}", e.getMessage());
          } catch (UnsupportedJwtException e) {
            log.error("JWT token is unsupported: {}", e.getMessage());
          } catch (IllegalArgumentException e) {
            log.error("JWT claims string is empty: {}", e.getMessage());
          }
        return false;
    }

    UsernamePasswordAuthenticationToken getAuthentication(final String token) {

        final Claims claims = getAllClaimsFromToken(token);

        final Collection<? extends GrantedAuthority> authorities =
                Arrays.stream(claims.get(JWTConstants.AUTHORITIES_KEY).toString().split(","))
                        .map(SimpleGrantedAuthority::new)
                        .collect(Collectors.toList());

        User principal = new User(claims.getSubject(), "", authorities);

        return new UsernamePasswordAuthenticationToken(principal, token, authorities);
    }

}