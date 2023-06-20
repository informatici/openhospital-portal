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
package org.isf.patientportal.model.user;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull
	@Column(nullable = false, unique = true)
	@NotEmpty(message = "EMPTY_VALIDATION_ERROR")
	private String username;

	@NotNull
	@Column(nullable = false, unique = true)
	@Email(message = "EMAIL_FORMAT_VALIDATION_ERROR")
	@NotEmpty(message = "EMPTY_VALIDATION_ERROR")
	private String email;

	@NotNull
	@NotEmpty(message = "EMPTY_VALIDATION_ERROR")
	@JsonIgnore
	private String password;

	@NotNull
	private boolean active;

	private boolean isUsing2FA;

	private String secret;

	@Column(nullable = false, updatable = false)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
	private Date created = new Date();

	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<UserSetting> userSettings = new ArrayList<>();

	@ManyToMany(cascade = {
			CascadeType.DETACH,
			CascadeType.MERGE,
			CascadeType.REFRESH,
			CascadeType.PERSIST
	}, targetEntity = Role.class, fetch = FetchType.EAGER)
	@JoinTable(name = "users_roles", joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
	private Set<Role> roles;

	private String token;
	private boolean accountVerified;
	private int failedLoginAttempts;
	private boolean loginDisabled;

	@OneToMany(mappedBy = "user")
	private Set<SecureToken> tokens;

	public User() {
		super();
		// this.secret = Base32.random();
		this.active = false;
	}

	
	
}
