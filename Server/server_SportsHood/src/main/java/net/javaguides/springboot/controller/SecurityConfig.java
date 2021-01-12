package net.javaguides.springboot.controller;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration

public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		//login
		http.antMatcher("/**").authorizeRequests().antMatchers("/", "/api/v1/**").permitAll().anyRequest().authenticated()
				.and().oauth2Login();
		// @formatter:off
	    http
	        //logout
	        .logout()
	            .logoutSuccessUrl("/").permitAll();
	    // @formatter:on
	}
}
