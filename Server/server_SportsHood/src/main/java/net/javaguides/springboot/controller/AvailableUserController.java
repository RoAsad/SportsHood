package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.AvailableUsers;
import net.javaguides.springboot.respository.AvailableUserRepository;

@RestController
@RequestMapping("/api/v1/")
public class AvailableUserController {

	@Autowired
	private AvailableUserRepository availableUserRepository; 
	
	//get all available_users
	@GetMapping("/availableUsers")
	public List<AvailableUsers> getAllUsers(){
		return availableUserRepository.findAll(); 
	}
}
