package com.teamsixx.musixapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.servlet.Filter;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;


@SpringBootApplication
@PropertySource("classpath:dbconfig.properties")
public class UserModule {
	
	public static void main(String[] args) {
		SpringApplication.run(UserModule.class, args);
	}

}


