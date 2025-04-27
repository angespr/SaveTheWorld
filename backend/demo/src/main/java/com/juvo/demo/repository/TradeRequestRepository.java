package com.juvo.demo.repository;

import com.juvo.demo.model.TradeRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface TradeRequestRepository extends MongoRepository<TradeRequest, String> {
    List<TradeRequest> findByUserIdAndIsActive(String userId, boolean isActive);
}
