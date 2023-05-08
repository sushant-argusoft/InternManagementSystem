package com.sushant.spring.mentor_management.services;

import com.sushant.spring.mentor_management.dto.InternDTO;
import com.sushant.spring.mentor_management.entities.Course;
import com.sushant.spring.mentor_management.entities.Intern;
import com.sushant.spring.mentor_management.repositories.InternRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service

public class InternServiceImpl implements  InternService{

    InternRep internRep ;
    MentorService mentorService;
    PersonService personService;

    @Autowired
    public InternServiceImpl(InternRep internRep, MentorService mentorService, PersonService personService) {
        this.internRep = internRep;
        this.mentorService = mentorService;
        this.personService = personService;
    }





    @Override
    public Intern create(Intern intern) {
        return this.internRep.save(intern);
    }

    @Override
    public List<Intern> getAllIntern() {
        return this.internRep.findAll();
    }
    @Override
    public  Intern getIntern(int internId){
         return this.internRep.findById(internId).orElseThrow(()->new RuntimeException("intern not found"));
//        Optional<Intern> res = internRep.findById(internId);
//        Intern intern = null;
//        if(res.isPresent())
//        {
//            intern = res.get();
//        }
//        else{
//            throw new RuntimeException("Not found");
//        }
//        return intern;
    }


    @Override
    public  Intern save(InternDTO internDTO){
         List<Course> courses = new ArrayList<>();

        return this.internRep.save(new Intern(internDTO.getInternId(),
                mentorService.getMentor(internDTO.getMentorId()),
                personService.get(internDTO.getPersonId()),
                courses));
    }

    @Override
    public Intern updateIntern(int id, Intern intern) {
//        Optional<Intern> newIntern = internRep.findById(id);
        return internRep.save(intern);
    }
}
