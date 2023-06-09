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
    @NotNull
    @Column(name = "image_url")
    private String imageUrl;


    @ManyToOne(cascade= CascadeType.ALL)
    @JoinColumn(name = "c_id", referencedColumnName = "c_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    Category category;

    @ManyToOne()
    @JoinColumn(name = "company_id", referencedColumnName = "company_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    Company company;

    @JsonIgnoreProperties({"courses","mentor"})

    @ManyToMany(cascade= CascadeType.ALL)
    @JoinTable(
            name = "course_enrolled",
            joinColumns = @JoinColumn(name = "course_id"),
            inverseJoinColumns = @JoinColumn(name = "intern_id"))

    List<Intern> interns;
}
