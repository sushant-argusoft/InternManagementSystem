package com.sushant.spring.mentor_management.services;

import com.sushant.spring.mentor_management.entities.Category;
import com.sushant.spring.mentor_management.repositories.CategoryRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class CategoryServiceImpl implements CategoryService {
    @Autowired
   CategoryRep categoryRep;


//    public CategoryServiceImpl(CategoryRep categoryRep) {
//        this.categoryRep = categoryRep;
//    }

    @Override
    public Category create(Category category) {
        return categoryRep.save(category);
    }

    @Override
    public List<Category> getAll() {
        return categoryRep.findAll();
    }

    @Override
    public Category getCategory(int categoryId) {
        return categoryRep.findById(categoryId).orElseThrow(()-> new RuntimeException("category not found"));
   }
}
