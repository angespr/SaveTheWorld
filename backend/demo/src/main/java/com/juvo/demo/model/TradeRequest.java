package com.juvo.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.validation.constraints.*;

@Document("requests")
public class TradeRequest {
    @Id
    private String id;

    @NotBlank
    private String title;

    @NotBlank
    private String requestDescription;

    @NotBlank
    private String offerDescription;

    private double expectedValue;

    private String category;

    private String userId; // optional: who posted the request

    // Constructors
    public TradeRequest() {}

    public TradeRequest(String title, String requestDescription, String offerDescription, double expectedValue, String category, String userId) {
        this.title = title;
        this.requestDescription = requestDescription;
        this.offerDescription = offerDescription;
        this.expectedValue = expectedValue;
        this.category = category;
        this.userId = userId;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }
    
    public void setId(String id) {
        this.id = id;
    }
    
    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getRequestDescription() {
        return requestDescription;
    }
    
    public void setRequestDescription(String requestDescription) {
        this.requestDescription = requestDescription;
    }
    
    public String getOfferDescription() {
        return offerDescription;
    }
    
    public void setOfferDescription(String offerDescription) {
        this.offerDescription = offerDescription;
    }
    
    public double getExpectedValue() {
        return expectedValue;
    }
    
    public void setExpectedValue(double expectedValue) {
        this.expectedValue = expectedValue;
    }
    
    public String getCategory() {
        return category;
    }
    
    public void setCategory(String category) {
        this.category = category;
    }
    
    public String getUserId() {
        return userId;
    }
    
    public void setUserId(String userId) {
        this.userId = userId;
    }    
}
