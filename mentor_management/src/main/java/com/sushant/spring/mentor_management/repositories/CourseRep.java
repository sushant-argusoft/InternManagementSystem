package com.sushant.spring.mentor_management.repositories;

import com.sushant.spring.mentor_management.entities.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CourseRep extends JpaRepository<Course, Integer> {

    @Query(value = "select c.course_id , course_name , c_id , company_id , image_url from course c right join course_enrolled ce on ce.course_id = c.course_id right join intern i on i.intern_id = ce.intern_id right join mentor m on m.mentor_id = i.mentor_id where m.person_id = :id ", nativeQuery = true)
    List<Course> getCourseForMentor(@Param("id") int id );

}
