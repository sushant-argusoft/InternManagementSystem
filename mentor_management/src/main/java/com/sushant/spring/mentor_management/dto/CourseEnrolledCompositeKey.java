package com.sushant.spring.mentor_management.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Table;

import java.io.Serializable;

@Embeddable
@Table(name = "course_enrolled")
public class CourseEnrolledCompositeKey implements Serializable {

    @Column(name="intern_id")
    int internId;
    @Column(name = "course_id")
    int courseId;
}
