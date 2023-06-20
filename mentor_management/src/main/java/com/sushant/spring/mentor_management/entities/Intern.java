package com.sushant.spring.mentor_management.entities;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString


@Entity
@Table(name="intern")

public class Intern {


    @Column(name = "intern_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int internId;

//    @JsonBackReference
    @JsonIgnoreProperties({"interns"})
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "mentor_id" , referencedColumnName = "mentor_id")
    private Mentor mentor;

    @OneToOne(cascade = CascadeType.ALL)

    @JoinColumn(name = "person_id", referencedColumnName = "person_id")
    private Person person;


    @ManyToMany(mappedBy = "interns")
    List<Course> courses;

}
