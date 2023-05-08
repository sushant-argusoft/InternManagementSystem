package com.sushant.spring.mentor_management.services;

import com.sushant.spring.mentor_management.entities.Mentor;

import java.util.List;

public interface MentorService {
    Mentor create(Mentor mentor);
    List<Mentor> getAllMentor();

    Mentor getMentor(int mentorId);
}
