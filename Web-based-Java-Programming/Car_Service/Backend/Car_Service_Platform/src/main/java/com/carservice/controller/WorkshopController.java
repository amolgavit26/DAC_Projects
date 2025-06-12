package com.carservice.controller;

import com.carservice.entity.Workshop;
import com.carservice.service.WorkshopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/workshops")
public class WorkshopController {

	@Autowired
	private WorkshopService workshopService;

	@PostMapping
	@PreAuthorize("hasRole('ADMIN')")
	public Workshop addWorkshop(@RequestBody Workshop workshop) {
		return workshopService.addWorkshop(workshop);
	}

	@PutMapping("/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public Workshop updateWorkshop(@PathVariable Long id, @RequestBody Workshop workshop) {
		return workshopService.updateWorkshop(id, workshop);
	}

	@DeleteMapping("/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public String deleteWorkshop(@PathVariable Long id) {
		workshopService.deleteWorkshop(id);
		return "Workshop deleted successfully.";
	}

	@GetMapping
	@PreAuthorize("hasAnyRole('ADMIN', 'USER')")
	public List<Workshop> getAllWorkshops() {
		return workshopService.getAllWorkshops();
	}

}
