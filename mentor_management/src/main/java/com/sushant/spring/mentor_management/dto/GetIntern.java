package com.sushant.spring.mentor_management.dto;

public class  GetIntern{
    public GetIntern(int internId) {
        this.internId = internId;
    }

    public int getInternId() {
        return internId;
    }

    public void setInternId(int internId) {
        this.internId = internId;
    }

    private int internId;
}