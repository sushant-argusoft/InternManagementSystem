package com.sushant.spring.mentor_management.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.List;

@Data
public class CourseDTO {

   private   int courseId;
   @NotNull
   @NotBlank(message = "please enter valid course name")
   private String courseName;
   @NotNull
   private String imageUrl;
   @NotNull

   private int cId;
   @NotNull

   private int companyId;

   @NotNull
   private List<Integer>  interns;

   public void setImageUrl(String imageUrl) {
      this.imageUrl = imageUrl;
   }

   public List<Integer> getInterns() {
      return interns;
   }

   public void setInterns(List<Integer> interns) {
      this.interns = interns;
   }

   public CourseDTO(int courseId, String courseName, int cId, int companyId, String imageUrl,List<Integer>interns) {
      this.courseId = courseId;
      this.courseName = courseName;
      this.cId = cId;
      this.companyId = companyId;
      this.imageUrl = imageUrl;
      this.interns = interns;

   }
   public  String getImageUrl(){
      return imageUrl;
   }

   public int getCourseId() {
      return courseId;
   }

   public void setCourseId(int courseId) {
      this.courseId = courseId;
   }

   public String getCourseName() {
      return courseName;
   }

   public void setCourseName(String courseName) {
      this.courseName = courseName;
   }

   public int getcId() {
      return cId;
   }

   public void setcId(int cId) {
      this.cId = cId;
   }

   public int getCompanyId() {
      return companyId;
   }

   public void setCompanyId(int companyId) {
      this.companyId = companyId;
   }


}


