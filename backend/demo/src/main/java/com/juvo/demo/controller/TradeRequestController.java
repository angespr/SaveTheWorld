package com.juvo.demo.controller;

import com.juvo.demo.model.TradeRequest;
import com.juvo.demo.repository.TradeRequestRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/requests")
public class TradeRequestController {

    private static final Logger logger = LoggerFactory.getLogger(TradeRequestController.class);

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
}
