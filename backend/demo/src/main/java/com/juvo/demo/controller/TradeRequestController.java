package com.juvo.demo.controller;

import com.juvo.demo.model.TradeRequest;
import com.juvo.demo.repository.TradeRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/requests")
public class TradeRequestController {

    @Autowired
    private TradeRequestRepository requestRepo;

    @PostMapping
    public String createRequest(@Valid @RequestBody TradeRequest request) {
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
}
