package com.sushant.spring.mentor_management.services;


import com.sushant.spring.mentor_management.entities.Person;

import java.util.List;

public interface PersonService {
    Person create(Person person);

    List<Person> getAll();
    Person get(int personId);
}
