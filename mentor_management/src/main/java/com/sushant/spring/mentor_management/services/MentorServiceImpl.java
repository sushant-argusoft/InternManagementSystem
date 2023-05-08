package com.sushant.spring.mentor_management.services;



import com.sushant.spring.mentor_management.entities.Mentor;
import com.sushant.spring.mentor_management.repositories.MentorRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MentorServiceImpl implements MentorService{

    MentorRep mentorRep;
    @Autowired
    MentorServiceImpl(MentorRep mentorRep){
        this.mentorRep = mentorRep;
    }


    @Override
    public Mentor create(Mentor mentor) {
        return  this.mentorRep.save(mentor);
    }

    @Override
    public List<Mentor> getAllMentor() {
        return mentorRep.findAll();
    }

    @Override
    public Mentor getMentor(int mentorId) {
        return mentorRep.findById(mentorId).orElseThrow(()-> new RuntimeException("mentor not found"));
    }
}
