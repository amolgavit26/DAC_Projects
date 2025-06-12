package com.carservice.service;

import java.util.List;
import com.carservice.entity.ServiceRequest;

public interface ServiceRequestService {
    ServiceRequest applyForService(ServiceRequest request);
    List<ServiceRequest> getAllRequests();
}
