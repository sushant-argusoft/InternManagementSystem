package com.sushant.spring.mentor_management.services;

import com.sushant.spring.mentor_management.entities.Category;

import java.util.List;

public interface CategoryService {
    Category create(Category category);

    List<Category> getAll();
    Category getCategory(int categoryId);

}
