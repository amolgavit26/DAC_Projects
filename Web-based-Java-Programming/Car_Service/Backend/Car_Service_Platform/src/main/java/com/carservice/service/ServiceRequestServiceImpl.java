package com.carservice.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.carservice.dao.ServiceRequestRepository;
import com.carservice.entity.ServiceRequest;

@Service
public class ServiceRequestServiceImpl implements ServiceRequestService {

    @Autowired
    private ServiceRequestRepository requestRepo;

    @Override
    public ServiceRequest applyForService(ServiceRequest request) {
        return requestRepo.save(request);
    }

    @Override
    public List<ServiceRequest> getAllRequests() {
        return requestRepo.findAll();
    }
}
