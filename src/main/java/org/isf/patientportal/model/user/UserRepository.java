package org.isf.patientportal.model.user;


import java.util.stream.Stream;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Repository;
@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    User findByEmail(String email);

    User findByUsername(String username);
	
    Streamable<User> findAllByFirstName(String firstName);  

    Streamable<User> findAll();

}

