package com.sushant.spring.mentor_management.repositories;

import com.sushant.spring.mentor_management.entities.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRep extends JpaRepository<Person,Integer> {

}
