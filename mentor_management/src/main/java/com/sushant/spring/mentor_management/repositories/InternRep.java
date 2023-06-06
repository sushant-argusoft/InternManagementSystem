package com.sushant.spring.mentor_management.repositories;

import com.sushant.spring.mentor_management.entities.Intern;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InternRep extends JpaRepository<Intern, Integer> {
}
