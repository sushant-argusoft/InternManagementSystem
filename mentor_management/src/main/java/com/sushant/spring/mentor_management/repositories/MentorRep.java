package com.sushant.spring.mentor_management.repositories;

import com.sushant.spring.mentor_management.entities.Mentor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MentorRep extends JpaRepository<Mentor, Integer> {



}
