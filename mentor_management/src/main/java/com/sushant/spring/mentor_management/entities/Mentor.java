package com.sushant.spring.mentor_management.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="mentor")
@ToString
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "mentorId")
public class Mentor {
   @Column(name = "mentor_id")
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int mentorId;



    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "person_id", referencedColumnName = "person_id",nullable = false)
    private Person person;


//    @JsonBackReference
    @OneToOne(mappedBy = "mentor")
    private Intern intern;

}
