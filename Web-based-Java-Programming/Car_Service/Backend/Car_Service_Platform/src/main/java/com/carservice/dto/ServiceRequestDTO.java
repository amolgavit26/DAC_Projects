package com.carservice.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class ServiceRequestDTO {
    private Long id;
    private String customerName;
    private String carModel;
    private String issueDescription;
    private Long userId;
    private Long workshopId;
    private String workshopName;
    private LocalDate appointmentDate;
    private String timeSlot;

}
