package com.juvo.demo.model;

import java.sql.Date;

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

    @NotBlank
    private String imageUrl;

    private double expectedValue;

    private String category;

    private String userId;

    private Boolean isActive;

    private Date lastUpdated;

    // Constructors
    public TradeRequest() {}

    public TradeRequest(String title, String requestDescription, String offerDescription, double expectedValue, String category, String userId, String imageUrl) {
        this.title = title;
        this.requestDescription = requestDescription;
        this.offerDescription = offerDescription;
        this.expectedValue = expectedValue;
        this.category = category;
        this.userId = userId;
        this.isActive = true; // Default to active
        this.imageUrl = imageUrl;
        this.lastUpdated = new Date(System.currentTimeMillis());
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

    public Boolean getIsActive() {
        return isActive;
    }
    
    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setLastUpdated(Date lastUpdated) {
        this.lastUpdated = new Date(System.currentTimeMillis());
    }

    public Date getCreatedAt() {
        return lastUpdated;
    }
}
