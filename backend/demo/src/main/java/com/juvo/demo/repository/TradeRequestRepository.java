package com.juvo.demo.repository;

import com.juvo.demo.model.TradeRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface TradeRequestRepository extends MongoRepository<TradeRequest, String> {
    List<TradeRequest> findByUserIdAndIsActive(String userId, boolean isActive);

    @Query("SELECT t FROM TradeRequest t WHERE t.userId != :userId")
    List<TradeRequest> findAllRequestsNotByUserId(String userId);
}
