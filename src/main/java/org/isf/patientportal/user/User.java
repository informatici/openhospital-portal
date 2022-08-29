package org.isf.patientportal.user;


import javax.validation.constraints.NotNull;
import javax.validation.constraints.NotEmpty;


public class User {
    
    @NotNull
    @NotEmpty
    private String email;
    
    @NotNull
    @NotEmpty
    private String password;
    
    private String matchingPassword;
    
}
