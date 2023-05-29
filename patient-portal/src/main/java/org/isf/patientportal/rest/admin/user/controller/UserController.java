package org.isf.patientportal.rest.admin.user.controller;

import java.util.Optional;

import org.isf.patientportal.model.user.User;
import org.isf.patientportal.model.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;

@Api(value = "User", tags={ "ADMIN_API" } )
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(value="/user", method = RequestMethod.GET)
    public Iterable<User> listUser(){
        return userRepository.findAll();
    }

    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    @RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
    public Optional<User> getOne(@PathVariable(value = "id") Long id){
        return userRepository.findById(id);
    }


}
