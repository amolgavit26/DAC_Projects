package com.carservice.dao;

import com.carservice.entity.ServiceRequest;
import com.carservice.entity.User;
import com.carservice.entity.Workshop;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ServiceRequestRepository extends JpaRepository<ServiceRequest, Long> {
    List<ServiceRequest> findByUser(User user);
    List<ServiceRequest> findByWorkshop(Workshop workshop);
}
