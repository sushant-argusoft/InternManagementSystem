package com.sushant.spring.mentor_management.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "person")
public class Person  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "person_id")
    private  int id;
    @NotNull
    @NotBlank(message = "First name  is mandatory")
    @Column(name = "first_name")
    private String firstName;
    @NotNull
    @NotBlank(message = "Last name  is mandatory")
    @Column(name = "last_name")
    private  String lastName;
    @NotNull
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @JsonFormat(pattern = "yyyy/MM/dd")
    @NotBlank(message = "Date of Birth  is mandatory")
    @Column(name = "date_of_birth")
    private  String dateOfBirth;


    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "address_id")
    private Address address;
}
