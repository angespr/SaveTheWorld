package com.juvo.demo.controller;

import com.juvo.demo.model.User;
import com.juvo.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepo;

    @PostMapping("/register")
    public String registerUser(@Valid @RequestBody User user) {
        if (!user.isAcceptedTerms()) {
            return "You must accept the Terms of Service.";
        }
        if (user.getAge() < 18) {
            return "You must be at least 18 years old.";
        }
        userRepo.save(user);
        return "User registered successfully!";
    }
}
