package net.javaguides.springboot.respository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import net.javaguides.springboot.model.AvailableUsers;

@Repository
public interface AvailableUserRepository extends JpaRepository<AvailableUsers,Long> {

	boolean existsAvailableUserBySportsNameAndCityAndUserId(String SportsName, String City, String UserId);
	 List<AvailableUsers> findAvailableUserBySportsNameAndCity(String SportsName,String City);
	
	AvailableUsers findAllBySportsNameAndCity(String SportsName, String City); 
	
}
