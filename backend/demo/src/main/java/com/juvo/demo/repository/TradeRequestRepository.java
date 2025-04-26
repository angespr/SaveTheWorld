package com.juvo.demo.repository;

import com.juvo.demo.model.TradeRequest;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TradeRequestRepository extends MongoRepository<TradeRequest, String> {
    // MongoRepository gives CRUD for TradeRequests
}
