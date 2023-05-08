package com.sushant.spring.mentor_management.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name ="course")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "course_id")
    private int id;
    @NotNull
    @NotBlank(message = "Course name  is mandatory")
    @Column(name = "course_name")
    private String courseName;


    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "c_id", referencedColumnName = "c_id")
    Category category;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "company_id", referencedColumnName = "company_id")
    Company company;

    @JsonIgnoreProperties("courses")
    @ManyToMany()
    @JoinTable(
            name = "course_enrolled",
            joinColumns = @JoinColumn(name = "intern_id"),
            inverseJoinColumns = @JoinColumn(name = "course_id"))
    List<Intern> interns;
}
