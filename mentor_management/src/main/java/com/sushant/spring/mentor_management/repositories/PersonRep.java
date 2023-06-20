package com.sushant.spring.mentor_management.repositories;

import com.sushant.spring.mentor_management.entities.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface PersonRep extends JpaRepository<Person,Integer> {

    Optional<Person> findByEmail(String email);
}
