package com.carservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carservice.dao.WorkshopRepository;
import com.carservice.entity.Workshop;

@Service
public class WorkshopServiceImpl implements WorkshopService {

	@Autowired
	private WorkshopRepository workshopRepo;

	@Override
	public Workshop addWorkshop(Workshop workshop) {
		return workshopRepo.save(workshop);
	}

	@Override
	public Workshop updateWorkshop(Long id, Workshop updated) {
		Workshop existing = workshopRepo.findById(id).orElseThrow();
		existing.setName(updated.getName());
		existing.setAddress(updated.getAddress());
		existing.setContactNumber(updated.getContactNumber());
		existing.setServicesOffered(updated.getServicesOffered());
		return workshopRepo.save(existing);
	}

	@Override
	public void deleteWorkshop(Long id) {
		workshopRepo.deleteById(id);
	}

	@Override
	public List<Workshop> getAllWorkshops() {
		return workshopRepo.findAll();
	}
}
