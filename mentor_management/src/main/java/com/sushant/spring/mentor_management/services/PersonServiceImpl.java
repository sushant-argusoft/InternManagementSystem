package com.sushant.spring.mentor_management.services;

import com.sushant.spring.mentor_management.entities.Person;
import com.sushant.spring.mentor_management.repositories.PersonRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public class PersonServiceImpl implements PersonService{

  @Autowired
     PersonRep personRep;
    @Override
    public Person create(Person person) {
        return personRep.save(person);
    }

    @Override
    public List<Person> getAll() {
        return personRep.findAll();
    }

    @Override
    public Person get(int personId) {
        return personRep.findById(personId).orElseThrow(()-> new RuntimeException("person not found"));
    }
}
