package com.teamsixx.musixapp.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teamsixx.musixapp.exception.UserConflictException;
import com.teamsixx.musixapp.model.User;

import com.teamsixx.musixapp.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
@CrossOrigin(origins = "http://localhost:8006", maxAge = 3600)
@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserService userService;

	@PostMapping("/register")
	public ResponseEntity<User> registerUser(@RequestBody User user) {
		ResponseEntity<User> entity = null;
		try {
			userService.saveUser(user);
			entity = new ResponseEntity<User>(HttpStatus.CREATED);
			
		} catch (UserConflictException e) {
			entity = new ResponseEntity<User>(HttpStatus.CONFLICT);
		} catch (Exception e) {
			entity = new ResponseEntity<User>(HttpStatus.BAD_REQUEST);
		}
		return entity;
	}

	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody User userInfo) {
//		System.out.println(userInfo);
//		System.out.println(userInfo.getEmail());
//		System.out.println(userInfo.getPassword());
		ResponseEntity<?> entity = null;
		try {
			String userName = userInfo.getEmail();
			String password = userInfo.getPassword();
			User user = userService.getByUserIdAndPassword(userName, password);
			
//			***************************************************
			
			
			String token =
					Jwts.builder().
					setId(user.getEmail()).
					setSubject(user.getPassword())
					.setIssuedAt(new Date()).
					signWith(SignatureAlgorithm.HS256,
							"usersecretkey").
					compact();
			
			
			Map<String, String> map1 = new
					HashMap<String, String>();
			map1.put("token", token);
			map1.put("message", "User Successfully logged in");
			map1.put("email",user.getEmail());
			map1.put("id", String.valueOf(user.getId()));
			ResponseEntity<Map<String, String>> response =
					new ResponseEntity<Map<String, String>>(
							map1, HttpStatus.OK);
			
			
			return response;
			
			
//			******************************************************
			
//			return new ResponseEntity<User>(user, HttpStatus.OK);
		} catch (Exception e) {
			entity = new ResponseEntity<String>("{ \"result\" : \"failed\", \"message\":\"" + e.getMessage() + "\"}",
					HttpStatus.UNAUTHORIZED);
		
		}
		
		return entity;
		
	}
	
	
	@GetMapping("/getUser/{id}")
	public ResponseEntity<?> getUser(@PathVariable("id") int id)
	{
		ResponseEntity<?> rs = null;
		User u=userService.getUserById(id);
		rs = ResponseEntity.status(HttpStatus.OK).body(u);
		return rs;
		
		
	}

}
