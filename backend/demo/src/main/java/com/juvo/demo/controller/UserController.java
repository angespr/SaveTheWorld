package com.juvo.demo.controller;
import com.juvo.demo.model.User;
import com.juvo.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.Map;  

@RestController
@RequestMapping("/api/users") // base path
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

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody Map<String, String> loginData) {
        String email = loginData.get("email");
        String password = loginData.get("password");

        User user = userRepo.findByEmail(email);
        if (user == null) {
            return ResponseEntity.status(401).body("User not found");
        }

        if (!user.getPassword().equals(password)) {
            return ResponseEntity.status(401).body("Invalid password");
        }

        return ResponseEntity.ok("Login successful");
    }
}
