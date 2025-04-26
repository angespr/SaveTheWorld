package com.juvo.demo.repository;

import com.juvo.demo.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    // Extend MongoRepository to automatically get basic CRUD operations
}

