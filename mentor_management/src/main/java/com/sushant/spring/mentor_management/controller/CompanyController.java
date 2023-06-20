package com.sushant.spring.mentor_management.controller;


import com.sushant.spring.mentor_management.dto.CourseDTO;
import com.sushant.spring.mentor_management.dto.InternDTO;
import com.sushant.spring.mentor_management.entities.*;
import com.sushant.spring.mentor_management.services.*;
import jakarta.validation.ReportAsSingleViolation;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
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
    @PreAuthorize("hasAnyRole('ROLE_MENTOR','ROLE_ADMIN')")
    public ResponseEntity<List<Company>> getAllCompany() {
        return new ResponseEntity<>(companyService.getAll(),HttpStatus.OK);
    }
    @GetMapping("/getCourseForMentor/{id}")
    public  List<Course> getCourseForMentor(@PathVariable int id ){
        return this.courseService.getCourseForMentor(id);
    }

    @GetMapping("/getAddress/{getId}")
    public Address getCompanyAddress(@PathVariable int getId) {
        return companyService.get(getId).getAddress();
    }

    @GetMapping("/getPerson")
   
    public List<Person> getAllPerson() {
        return personService.getAll();
    }

    @GetMapping("/getPerson/{getEmail}")
    public Person getPersonAddress(@PathVariable String getEmail) {
        return personService.getByEmail(getEmail);
    }

    @GetMapping("/getMentor")
    @PreAuthorize("hasAnyRole('ROLE_MENTOR','ROLE_ADMIN')")
    public List<Mentor> getAllMentors() {
        return mentorService.getAllMentor();
    }

    @GetMapping("/getIntern/{getId}")
    @PreAuthorize("hasRole('ROLE_INTERN')")
    public Intern getInternById(@PathVariable int getId) {
        return internService.getIntern(getId);
    }
    @GetMapping("/getMentor/{getId}")
    @PreAuthorize("hasRole('ROLE_MENTOR')")
    public Mentor getMentorById(@PathVariable int getId) {
        return mentorService.getMentor(getId);
    }

    @GetMapping("/getIntern")
    @PreAuthorize("hasAnyRole('ROLE_MENTOR','ROLE_ADMIN')")
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

        courseService.save(courseDTO);
        return new ResponseEntity<>("data saved", HttpStatus.OK);
    }

//    @PostMapping("/saveIntern")
//    public ResponseEntity<String> saveIntern(@Valid @RequestBody InternDTO internDTO) {
//         internService.save(internDTO);
//
//        return new ResponseEntity<>("data saved", HttpStatus.OK);
//    }

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

        courseService.delete(id);
        return new ResponseEntity<>("Data deleted", HttpStatus.OK);
    }

    @PostMapping("/person")
    public ResponseEntity<String> savePerson(@RequestBody Person person){
        System.out.println(person);

        personService.create(person);
        return new ResponseEntity<>("Data saved", HttpStatus.OK);
    }

    @PostMapping("/changeMentor/{internId}")
    public ResponseEntity<String>  changeMentor(@PathVariable int internId,@RequestBody int id){

       this.internService.getIntern(internId).setMentor(this.mentorService.getMentor(id));
        internService.create(this.internService.getIntern(internId))  ;
        return new ResponseEntity<>("Changed Mentor",HttpStatus.OK);
    }
    @PostMapping("/saveIntern")
    public ResponseEntity<String> saveIntern(@RequestBody Intern intern){
        this.internService.create(intern);
        return new ResponseEntity<>("Saved Intern", HttpStatus.OK);
    }
    @PostMapping("/saveMentor")
    public ResponseEntity<String> saveMentor(@RequestBody Mentor mentor){
        this.mentorService.create(mentor);
        return new ResponseEntity<>("Saved Mentor", HttpStatus.OK);
    }
    @GetMapping("/getRemainingMentors")
    public  List<Mentor> getRemainingMentors(){
        return mentorService.getRemainingMentor();
    }

}
