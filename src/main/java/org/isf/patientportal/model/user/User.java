package org.isf.patientportal.model.user;


import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.JoinColumn;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

@Entity
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue
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
    private String firstName;
    
    @NotNull
    private String secondName;

    @NotNull
    private String name;
    
    @NotNull
    private LocalDate birthDate;

	@NotNull
	private int age;

	@NotNull
	private String agetype;

	@NotNull
	private char sex;
	
	private String address;

	@NotNull
	private String city;
	
	private String nextKin;
	
	private String telephone;
	
	private String note;
    
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
        },
        targetEntity = Role.class,
        fetch = FetchType.EAGER
    )
    @JoinTable( 
        name = "users_roles", 
        joinColumns = @JoinColumn(
          name = "user_id", referencedColumnName = "id"), 
        inverseJoinColumns = @JoinColumn(
          name = "role_id", referencedColumnName = "id")) 
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
