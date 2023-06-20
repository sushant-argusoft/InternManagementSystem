package com.sushant.spring.mentor_management.services;
import com.sushant.spring.mentor_management.entities.Mentor;
import com.sushant.spring.mentor_management.repositories.MentorRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class MentorServiceImpl implements MentorService{

    MentorRep mentorRep;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    MentorServiceImpl(MentorRep mentorRep){
        this.mentorRep = mentorRep;
    }
    @Override
    public Mentor create(Mentor mentor) {
        mentor.getPerson().setPassword(passwordEncoder.encode(mentor.getPerson().getPassword()));
        return  this.mentorRep.save(mentor);
    }

    @Override
    public List<Mentor> getAllMentor() {
        return mentorRep.findAll();
    }

    @Override
    public Mentor getMentor(int mentorId) {
        return mentorRep.findById(mentorId).get();
    }

    @Override
    public List<Mentor> getRemainingMentor() {
        System.out.println(((List<Mentor>) mentorRep.getRemainingMentor()) +  "   HEllo");
        return ((List<Mentor>) ((List<Mentor>) mentorRep.getRemainingMentor()));
    }
}
