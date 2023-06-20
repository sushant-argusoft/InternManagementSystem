package com.sushant.spring.mentor_management.repositories;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.sushant.spring.mentor_management.entities.Mentor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface MentorRep extends JpaRepository<Mentor, Integer> {
    @Query(value = "select * from mentor m where m.mentor_id not in (select i.mentor_id from intern i) ",
            nativeQuery = true)
    Collection<Mentor> getRemainingMentor();

}
