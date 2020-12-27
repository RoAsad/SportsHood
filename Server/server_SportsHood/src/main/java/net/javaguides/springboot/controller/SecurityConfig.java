package net.javaguides.springboot.controller;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration

public class SecurityConfig extends WebSecurityConfigurerAdapter{

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.antMatcher("/**").authorizeRequests()
			.antMatchers("/", "/api/v1/").permitAll()
			.anyRequest().authenticated()
			.and()
			.oauth2Login();
	}
//	 @Override
//	    protected void configure(HttpSecurity http) throws Exception {
//	    	// @formatter:off
//	        http
//	            .authorizeRequests(a -> a
//	                .antMatchers("/", "/error", "/webjars/**").permitAll()
//	                .anyRequest().authenticated()
//	            )
//	            .exceptionHandling(e -> e
//	                .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
//	            )
//	            .oauth2Login();
//	        // @formatter:on
//	    }

}
