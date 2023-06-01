package com.sushant.spring.mentor_management.controller;


import com.sushant.spring.mentor_management.dto.CourseDTO;
import com.sushant.spring.mentor_management.dto.InternDTO;
import com.sushant.spring.mentor_management.entities.*;
import com.sushant.spring.mentor_management.services.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/company/api")
public class CompanyController {

    private CompanyService companyService;

    private PersonService personService;

    private MentorService mentorService;

    private InternService internService;

    private CourseService courseService;
    private CategoryService categoryService;

    // private CategoryService categoryService;
    @Autowired
    public CompanyController(CompanyService companyService, PersonService personService, MentorService mentorService,
            InternService internService, CourseService courseService, CategoryService categoryService) {
        this.companyService = companyService;
        this.personService = personService;
        this.mentorService = mentorService;
        this.internService = internService;
        this.courseService = courseService;
         this.categoryService = categoryService;
    }

    @GetMapping("/getCompany")
    @PreAuthorize("hasRole('ROLE_MENTOR')")
    public List<Company> getAllCompany() {
        return companyService.getAll();
    }

    @GetMapping("/getAddress/{getId}")
    public Address getCompanyAddress(@PathVariable int getId) {
        return companyService.get(getId).getAddress();
    }

    @GetMapping("/getPerson")
    @PreAuthorize("hasRole('ROLE_MENTOR')")
    public List<Person> getAllPerson() {
        return personService.getAll();
    }

    @GetMapping("/getPerson/{getId}")
    public Address getPersonAddress(@PathVariable int getId) {
        return personService.get(getId).getAddress();
    }

    @GetMapping("/getMentor")
    @PreAuthorize("hasRole('ROLE_MENTOR')")
    public List<Mentor> getAllMentors() {
        return mentorService.getAllMentor();
    }

    @GetMapping("/getIntern/{getId}")
    @PreAuthorize("hasRole('ROLE_MENTOR')")
    public Intern getInternById(@PathVariable int getId) {
        return internService.getIntern(getId);
    }

    @GetMapping("/getIntern")
    @PreAuthorize("hasRole('ROLE_MENTOR')")
    public List<Intern> getAllInterns() {
        return internService.getAllIntern();
    }

    @GetMapping("/getCourse")
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();

    }

    @PostMapping("/saveCourse")
    public ResponseEntity<String> saveCourse(@Valid @RequestBody CourseDTO courseDTO) {
        // System.out.println(courseDTO);
        // List<Intern> interns = new ArrayList<>();
        //// System.out.println(internService.getIntern(1));
        //// for(int i : courseDTO.getInternList()){
        //// interns.add(internService.getIntern(i));
        //// }
        // Course course = new Course(courseDTO.getCourseId(),
        // courseDTO.getCourseName(),
        // categoryService.getCategory(courseDTO.getcId()),
        // companyService.get(courseDTO.getCompanyId()),
        // interns) ;
        System.out.println(courseDTO);
        courseService.save(courseDTO);
        return new ResponseEntity<>("data saved", HttpStatus.OK);
    }

    @PostMapping("/saveIntern")
    public ResponseEntity<String> saveIntern(@Valid @RequestBody InternDTO internDTO) {
         internService.save(internDTO);

        return new ResponseEntity<>("data saved", HttpStatus.OK);
    }

    @PostMapping("/saveCompany")
    public Company saveCompany(@Valid @RequestBody Company company) {
        return companyService.create(company);
    }

    @PutMapping("/editIntern/{id}")
    public @ResponseBody ResponseEntity<String> editIntern(@PathVariable int id, @RequestBody Intern intern) {
        internService.updateIntern(id, intern);
        return new ResponseEntity<>("Data update", HttpStatus.OK);
    }

    @GetMapping("/getCategory")
    public List<Category> getAllCategory(){
        return categoryService.getAll();
    }
    @DeleteMapping("/course/{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable int id){
        System.out.println("hellllllllllllllllllllllllllllllllllllllllllllllllllllo"+id);
        courseService.delete(id);
        return new ResponseEntity<>("Data deleted", HttpStatus.OK);
    }

}
