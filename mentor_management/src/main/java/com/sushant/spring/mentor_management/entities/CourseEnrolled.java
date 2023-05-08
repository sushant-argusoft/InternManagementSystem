package com.sushant.spring.mentor_management.entities;

import com.sushant.spring.mentor_management.dto.CourseEnrolledCompositeKey;
import jakarta.persistence.*;

@Entity
@Table(name = "course_enrolled")

public class CourseEnrolled {

    @EmbeddedId
    CourseEnrolledCompositeKey id;

    @ManyToOne
    @MapsId("internId")
    @JoinColumn(name = "intern_id", referencedColumnName = "intern_id")
    private Intern intern;

    @ManyToOne
    @MapsId("courseId")
    @JoinColumn(name = "course_id", referencedColumnName = "course_id")
    private Course course;



}
