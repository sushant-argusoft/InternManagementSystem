package com.sushant.spring.mentor_management.services;

import com.sushant.spring.mentor_management.entities.Company;

import java.util.List;

public interface CompanyService {
    Company create(Company company);

    List<Company> getAll();
    Company get(int companyId);
}
