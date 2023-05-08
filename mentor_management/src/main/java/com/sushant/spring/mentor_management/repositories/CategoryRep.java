package com.sushant.spring.mentor_management.repositories;

import com.sushant.spring.mentor_management.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRep extends JpaRepository<Category , Integer> {
}
