package com.carservice.controller;

import com.carservice.dto.ServiceRequestDTO;
import com.carservice.entity.ServiceRequest;
import com.carservice.entity.User;
import com.carservice.entity.Workshop;
import com.carservice.dao.UserRepository;
import com.carservice.dao.WorkshopRepository;
import com.carservice.dao.ServiceRequestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/service-requests")
@CrossOrigin(origins = "*")
public class ServiceRequestController {

    @Autowired
    private ServiceRequestRepository serviceRequestRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private WorkshopRepository workshopRepository;

    @PostMapping("/create")
    public ResponseEntity<?> createServiceRequest(@RequestBody ServiceRequestDTO dto) {
        try {
            if (dto.getUserId() == null || dto.getWorkshopId() == null) {
                return ResponseEntity.badRequest().body("User ID and Workshop ID must not be null.");
            }

            User user = userRepository.findById(dto.getUserId())
                    .orElseThrow(() -> new RuntimeException("User not found with id: " + dto.getUserId()));
            Workshop workshop = workshopRepository.findById(dto.getWorkshopId())
                    .orElseThrow(() -> new RuntimeException("Workshop not found with id: " + dto.getWorkshopId()));

            ServiceRequest request = new ServiceRequest();
            request.setCustomerName(dto.getCustomerName());
            request.setCarModel(dto.getCarModel());
            request.setIssueDescription(dto.getIssueDescription());
            request.setTimeSlot(dto.getTimeSlot());
            request.setAppointmentDate(dto.getAppointmentDate()); // ✅ Set appointment date
            request.setUser(user);
            request.setWorkshop(workshop);

            ServiceRequest saved = serviceRequestRepository.save(request);
            return ResponseEntity.ok(saved);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error creating service request: " + e.getMessage());
        }
    }

    @GetMapping("/admin")
    public ResponseEntity<?> getAllServiceRequestsForAdmin() {
        try {
            List<ServiceRequest> requests = serviceRequestRepository.findAll();
            List<ServiceRequestDTO> dtos = requests.stream().map(req -> {
                ServiceRequestDTO dto = new ServiceRequestDTO();
                dto.setId(req.getId());
                dto.setCustomerName(req.getCustomerName());
                dto.setCarModel(req.getCarModel());
                dto.setIssueDescription(req.getIssueDescription());
                dto.setTimeSlot(req.getTimeSlot());
                dto.setAppointmentDate(req.getAppointmentDate()); // ✅ Include date in response
                dto.setUserId(req.getUser().getId());
                dto.setWorkshopId(req.getWorkshop().getId());
                dto.setWorkshopName(req.getWorkshop().getName());
                return dto;
            }).collect(Collectors.toList());

            return ResponseEntity.ok(dtos);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error fetching service requests: " + e.getMessage());
        }
    }
}
