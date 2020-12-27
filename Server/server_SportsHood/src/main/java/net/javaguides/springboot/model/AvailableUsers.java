package net.javaguides.springboot.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name ="availableUsers")
public class AvailableUsers {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id; 
	
	@CreationTimestamp
	private Timestamp regdate;

	@Column(name="sportsName")
	private String sportsName;
	
	@Column(name="city")
	private String city;
	
	@Column(name="userId")
	private String userId;

	public AvailableUsers(){
		
	}
	public AvailableUsers(long id, Timestamp regdate, String sportsName, String city, String userId) {
		super();
		this.id = id;
		this.regdate = regdate;
		this.sportsName = sportsName;
		this.city = city;
		this.userId = userId;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Timestamp getRegdate() {
		return regdate;
	}

	public void setRegdate(Timestamp regdate) {
		this.regdate = regdate;
	}

	public String getSportsName() {
		return sportsName;
	}

	public void setSportsName(String sportsName) {
		this.sportsName = sportsName;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	} 
	
	
}
