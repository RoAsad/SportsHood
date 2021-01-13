package net.javaguides.springboot.controller;

import java.lang.reflect.Member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

//import antlr.collections.List;
import net.javaguides.springboot.model.AvailableUsers;
import net.javaguides.springboot.model.User;
import net.javaguides.springboot.respository.AvailableUserRepository;
import net.javaguides.springboot.respository.UserRepository;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class mainController {

	@Autowired
	private UserRepository userRepository; 
	
	@Autowired
	private AvailableUserRepository availableUserRepository;  
	
	@PostMapping(path = "/registerUser", consumes = "application/json", produces = "application/json")
	public boolean registerUser(@RequestBody  AvailableUsers availableUser)
	{
		System.out.println("1st: YOYO  ***********************" + availableUser);
		String sportsName = availableUser.getSportsName();
		String city = availableUser.getCity(); 
		String userId = availableUser.getUserId(); 
		
		boolean exists = availableUserRepository.existsAvailableUserBySportsNameAndCityAndUserId(sportsName, city, userId);
    	if(!exists)
    		availableUserRepository.save(availableUser); 
    	System.out.println("YOYO ****************");
		return exists; 
	}
	
//	@GetMapping("/findAvailableUsers")
//	public List<AvailableUsers> findAvailableUsers(@RequestParam(defaultValue= "sportsName") String sportsName, @RequestParam(defaultValue= "city")  String city)
//	{
//		System.out.println("sports name " + sportsName);
//		System.out.println("city " + city);
////		List<AvailableUsers> availableusers=  new AvailableUsers();
//		return availableUserRepository.findAllBySportsNameAndCity(sportsName, city); 
//		System.out.println("------- " + availableusers); 
////		System.out.println("------- " + availableusers.getSportsName());  
//		return availableusers; 
//	}
//	
}
