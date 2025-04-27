package com.juvo.demo.repository;

import com.juvo.demo.model.TradeRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;
import java.util.Optional;

public interface TradeRequestRepository extends MongoRepository<TradeRequest, String> {
    List<TradeRequest> findByUserIdAndIsActive(String userId, boolean isActive);

    // Add method to find a request by ID
    Optional<TradeRequest> findById(String id);
}
