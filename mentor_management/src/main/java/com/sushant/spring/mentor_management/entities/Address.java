package com.sushant.spring.mentor_management.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="address")
@ToString

public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="address_id")
    private int id;

    @Column(name = "house_number")
    private int houseNumber;

    @Column(name="street_number")
    private int streetNumber;


    @Column(name = "street_name")
    private  String streetName;

    @Column(name = "pin_code")
    private int pinCode;

    @Column(name ="city_name")

    private  String cityName;

    @Column(name="country_name")
    private String countryName;
}
