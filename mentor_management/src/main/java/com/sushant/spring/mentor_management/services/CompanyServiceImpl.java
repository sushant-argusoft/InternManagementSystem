package com.sushant.spring.mentor_management.services;

import com.sushant.spring.mentor_management.entities.Company;
import com.sushant.spring.mentor_management.repositories.CompanyRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class CompanyServiceImpl implements CompanyService {
    private CompanyRep companyRep;

    @Autowired
    public CompanyServiceImpl(CompanyRep companyRep){
        this.companyRep = companyRep;
    }

    @Override
    public Company create(Company company) {
        return companyRep.save(company);
    }

    @Override
    public List<Company> getAll() {
        return companyRep.findAll();
    }

    @Override
    public Company get(int companyId) {
        return companyRep.findById(companyId).orElseThrow(()-> new RuntimeException("company not found"));
    }
}
