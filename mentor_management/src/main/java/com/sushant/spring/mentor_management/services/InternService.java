package com.sushant.spring.mentor_management.services;

import com.sushant.spring.mentor_management.dto.InternDTO;
import com.sushant.spring.mentor_management.entities.Intern;

import java.util.List;

public interface InternService {
    Intern create(Intern intern);
    List<Intern> getAllIntern();
    Intern getIntern(int internId);
    Intern save(InternDTO internDTO);
    Intern updateIntern(int id , Intern intern);
}
