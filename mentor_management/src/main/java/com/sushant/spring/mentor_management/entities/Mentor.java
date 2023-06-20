package com.sushant.spring.mentor_management.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.unboundid.util.Nullable;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;


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
    @JoinColumn(name = "person_id", referencedColumnName = "person_id")
   @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Person person;



    @OneToMany(mappedBy = "mentor")
    private List<Intern> intern;

}
