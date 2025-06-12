package com.carservice.controller;

import com.carservice.entity.Workshop;
import com.carservice.service.WorkshopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/public")
public class PublicController {

    @Autowired
    private WorkshopService workshopService;

    @GetMapping("/workshops")
    public List<Workshop> getAllWorkshopsPublic() {
        return workshopService.getAllWorkshops();
    }
}
