package com.sushant.spring.mentor_management.repositories;

import com.sushant.spring.mentor_management.entities.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRep extends JpaRepository<Company,Integer> {
}
