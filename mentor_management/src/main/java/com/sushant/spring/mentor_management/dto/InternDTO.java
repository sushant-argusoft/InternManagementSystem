package com.sushant.spring.mentor_management.dto;

public class InternDTO {

    private int internId;
    private int personId;
    private  int mentorId;


    public InternDTO(int internId, int mentorId, int personId) {
        this.internId = internId;
        this.mentorId = mentorId;
        this.personId = personId;
    }

    public int getInternId() {
        return internId;
    }

    public void setInternId(int internId) {
        this.internId = internId;
    }

    public int getMentorId() {
        return mentorId;
    }

    public void setMentorId(int mentorId) {
        this.mentorId = mentorId;
    }

    public int getPersonId() {
        return personId;
    }

    public void setPersonId(int personId) {
        this.personId = personId;
    }
}
