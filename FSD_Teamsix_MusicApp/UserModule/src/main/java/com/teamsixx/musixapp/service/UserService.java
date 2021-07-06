package com.teamsixx.musixapp.service;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.teamsixx.musixapp.exception.UserConflictException;
import com.teamsixx.musixapp.exception.UserNotFoundException;
import com.teamsixx.musixapp.model.User;
import com.teamsixx.musixapp.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;
	
	
	
	public void saveUser(User user) throws UserConflictException {
	        User u=userRepo.findByEmail(user.getEmail());
		if (u!=null) {
			throw new UserConflictException("User already exist");
		}
		else {
		
			String hashpw =
					BCrypt.hashpw(user.getPassword(),
							BCrypt.gensalt());
			System.out.println(hashpw);
			user.setPassword(hashpw);
		
			 userRepo.save(user);
		}
		
	}
	
	public User getByUserIdAndPassword(String email, String password) throws UserNotFoundException {
		// TODO Auto-generated method stub
		User user = userRepo.findByEmail(email);
		if(user==null)
		{
			throw new UserNotFoundException();
		}
		else
		{
			boolean matched = BCrypt.checkpw(password, user.getPassword());
			System.out.println(matched);
			if(matched)
			{
				return user;
			}
			else
			{
				throw new UserNotFoundException();
			}
		}
	}
	
	
	
	public User  getUserById(int id)
	{
		Optional<User> o=userRepo.findById((long) id);
		User u=null;
		u=o.get();
		return u;
		
		
	}
	
	
/*	public void saveUser(User u) throws AuthenticationException {
		if(checkDuplicateUser(u.getEmail()).isPresent()) {
			throw new AuthenticationException("This Email is already Used");
		}
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		u.setPassword(encoder.encode(u.getPassword()));
		userRepo.save(u);
	}
	*/
	/*public Optional<User> checkDuplicateUser(String email) {
		return userRepo.findByEmail(email);
	}
	
	public User getUserByEmail(String email) {
		return userRepo.findByEmail(email).get();
	}
	
	public Optional<User> getUserid(Long id){
		return userRepo.findById(id);
	}
	
	public void deleteUser(Long id) {
		userRepo.deleteById(id);
	}
	*/
}
