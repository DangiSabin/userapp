package com.dangisabin.userappbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dangisabin.userappbackend.model.User;
import com.dangisabin.userappbackend.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;

	public List<User> getAllUsers() {
		return this.userRepository.findAll();
	}

	public User getUser(Long id) {
		return this.userRepository.findById(id).get();
	}

	public User addUser(User user) {
		return this.userRepository.save(user);
	}

	public void deleteUser(Long id) {
		this.userRepository.deleteById(id);
	}

	public User updateUser(User updateUser) {
		User existingUser = this.userRepository.findById(updateUser.getId()).get();
		
		if(existingUser!=null) {
			existingUser.setFirstName(updateUser.getFirstName());
			existingUser.setLastName(updateUser.getLastName());
			existingUser.setEmail(updateUser.getEmail());
			return this.userRepository.save(existingUser);
		}else {
			return null;
		}
	}
}
