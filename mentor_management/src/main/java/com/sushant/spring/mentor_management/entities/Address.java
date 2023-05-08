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
    @NotNull
    @NotBlank(message = "House number is mandatory")
    @Column(name = "house_number")
    private int houseNumber;
    @NotNull
    @Column(name="street_number")
    private int streetNumber;
    @NotNull
    @NotBlank(message = "Street name  is mandatory")
    @Column(name = "street_name")
    private  String streetName;
    @NotNull
    @Column(name = "pin_code")
    private int pinCode;
    @NotNull
    @Column(name ="city_name")
    @NotBlank(message = "City name  is mandatory")
    private  String cityName;
    @NotNull
    @NotBlank(message = "Country name  is mandatory")
    @Column(name="country_name")
    private String countryName;
}
