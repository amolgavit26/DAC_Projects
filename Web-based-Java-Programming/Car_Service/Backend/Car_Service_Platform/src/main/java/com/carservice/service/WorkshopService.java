package com.carservice.service;

import java.util.List;

import com.carservice.entity.Workshop;

public interface WorkshopService {
    Workshop addWorkshop(Workshop workshop);
    Workshop updateWorkshop(Long id, Workshop workshop);
    void deleteWorkshop(Long id);
    List<Workshop> getAllWorkshops();
}
