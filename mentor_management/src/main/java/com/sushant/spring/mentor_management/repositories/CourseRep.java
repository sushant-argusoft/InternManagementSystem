package com.sushant.spring.mentor_management.repositories;

import com.sushant.spring.mentor_management.entities.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRep extends JpaRepository<Course, Integer> {
}
