package com.juvo.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.validation.constraints.*;

@Document("users")
public class User {
    @Id
    private String id;

    @NotBlank
    private String name;

    @Email
    private String email;

    @Min(18)
    private int age;

    @NotBlank
    private String location;

    @NotBlank
    private String password;

    private String talents;

    private boolean acceptedTerms;

    // Constructors
    public User() {}

    public User(String name, String email, int age, String location, String password, String talents, boolean acceptedTerms) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.location = location;
        this.password = password;
        this.talents = talents;
        this.acceptedTerms = acceptedTerms;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }
    
    public void setId(String id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        this.age = age;
    }
    
    public String getLocation() {
        return location;
    }
    
    public void setLocation(String location) {
        this.location = location;
    }
    
    public String getPassword() {
        return password;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getTalents() {
        return talents;
    }
    
    public void setTalents(String talents) {
        this.talents = talents;
    }
    
    public boolean isAcceptedTerms() {
        return acceptedTerms;
    }
    
    public void setAcceptedTerms(boolean acceptedTerms) {
        this.acceptedTerms = acceptedTerms;
    }    

}
