package com.sushant.spring.mentor_management.services;

import com.sushant.spring.mentor_management.dto.CourseDTO;
import com.sushant.spring.mentor_management.entities.Course;
import com.sushant.spring.mentor_management.entities.Intern;
import com.sushant.spring.mentor_management.repositories.CourseRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class CourseServiceImpl implements CourseService{
    CourseRep courseRep;
    @Autowired
    InternService internService;
    @Autowired
    CompanyService companyService;
    @Autowired
    CategoryService categoryService;
    @Autowired
    CourseServiceImpl(CourseRep courseRep){
        this.courseRep = courseRep;
    }
    @Override
    public Course create(Course course) {
        return courseRep.save(course);
    }

    @Override
    public List<Course> getAllCourses() {
        return courseRep.findAll();
    }

    @Override
    public Course save(CourseDTO courseDTO){


        List<Intern> interns = new ArrayList<>();
        for(Integer id : courseDTO.getInterns()){
            interns.add(internService.getIntern(id));
        }


        Course course = new Course(courseDTO.getCourseId(),
                courseDTO.getCourseName(),
                courseDTO.getImageUrl(),
                categoryService.getCategory(courseDTO.getcId()),
                companyService.get(courseDTO.getCompanyId()),
                interns) ;
        return courseRep.save(course);
    }

    @Override
    public List<Course> getCourseForMentor(int id) {
        return courseRep.getCourseForMentor(id);
    }

    @Override
    public void delete(int id) {
        courseRep.deleteById(id);
    }

}
