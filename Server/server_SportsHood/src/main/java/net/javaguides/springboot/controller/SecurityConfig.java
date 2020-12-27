package net.javaguides.springboot.controller;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

@Configuration
public class SecurityConfig {

	public void configure(HttpSecurity httpSecurity) throws Exception {
		httpSecurity
			.antMatcher("/**").authorizeRequests()
			.antMatchers("/").permitAll()
			.anyRequest().authenticated()
			.and()
			.oauth2Login();
	}
}
