package com.juvo.demo.controller;

import com.juvo.demo.model.TradeRequest;
import com.juvo.demo.repository.TradeRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/requests")
public class TradeRequestController {

    @Autowired
    private TradeRequestRepository requestRepo;

    @PostMapping
    public String createRequest(@Valid @RequestBody TradeRequest request) {
        request.setIsActive(true);
        requestRepo.save(request);
        return "Trade request posted!";
    }

    @GetMapping
    public List<TradeRequest> getAllRequests() {
        return requestRepo.findAll();
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAllRequests() {
        requestRepo.deleteAll();
        return ResponseEntity.noContent().build();
    }

    // Get active requests by userId
    @GetMapping("/user/{userId}/active")
    public List<TradeRequest> getActiveRequestsByUserId(@PathVariable String userId) {
        List<TradeRequest> activeRequests = requestRepo.findByUserIdAndIsActive(userId, true);
        return activeRequests;
    }

    // Get completed requests by userId
    @GetMapping("/user/{userId}/completed")
    public List<TradeRequest> getCompletedRequestsByUserId(@PathVariable String userId) {
        List<TradeRequest> completedRequests = requestRepo.findByUserIdAndIsActive(userId, false);
        return completedRequests;
    }

    // Get request by ID
    @GetMapping("/{id}")
    public ResponseEntity<TradeRequest> getRequestById(@PathVariable String id) {
        Optional<TradeRequest> request = requestRepo.findById(id);
        return request.map(ResponseEntity::ok)
                      .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Update request by ID
    @PutMapping("/{id}")
    public ResponseEntity<String> updateRequest(@PathVariable String id, @Valid @RequestBody TradeRequest updatedRequest) {
        Optional<TradeRequest> existingRequestOpt = requestRepo.findById(id);

        if (existingRequestOpt.isPresent()) {
            TradeRequest existingRequest = existingRequestOpt.get();

            // Update the fields of the existing request
            existingRequest.setTitle(updatedRequest.getTitle());
            existingRequest.setRequestDescription(updatedRequest.getRequestDescription());
            existingRequest.setOfferDescription(updatedRequest.getOfferDescription());
            existingRequest.setCategory(updatedRequest.getCategory());
            existingRequest.setExpectedValue(updatedRequest.getExpectedValue());

            // Save the updated request
            requestRepo.save(existingRequest);
            return ResponseEntity.ok("Trade request updated successfully!");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete request by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRequestById(@PathVariable String id) {
        Optional<TradeRequest> existingRequest = requestRepo.findById(id);

        if (existingRequest.isPresent()) {
            requestRepo.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Mark request as completed (set isActive to false)
    @PutMapping("/{id}/complete")
    public ResponseEntity<String> markRequestAsCompleted(@PathVariable String id) {
        Optional<TradeRequest> requestOptional = requestRepo.findById(id);
        if (requestOptional.isPresent()) {
            TradeRequest request = requestOptional.get();
            request.setIsActive(false);
            requestRepo.save(request);
            return ResponseEntity.ok("Request marked as completed.");
        } else {
            return ResponseEntity.status(404).body("Request not found.");
        }
    }

    // Mark request as active (set isActive to true)
    @PutMapping("/{id}/reactivate")
    public ResponseEntity<String> markRequestAsActive(@PathVariable String id) {
        Optional<TradeRequest> requestOptional = requestRepo.findById(id);
        if (requestOptional.isPresent()) {
            TradeRequest request = requestOptional.get();
            request.setIsActive(true);
            requestRepo.save(request);
            return ResponseEntity.ok("Request marked as completed.");
        } else {
            return ResponseEntity.status(404).body("Request not found.");
        }
    }

    // Get all requests where the userId is not a certain value
    @GetMapping("/not-user/{userId}")
    public List<TradeRequest> getRequestsNotByUserId(@PathVariable String userId) {
        return requestRepo.findAllRequestsNotByUserId(userId);
    }
}
