package com.example.demo.uss.service;

import com.example.demo.uss.domain.User;

public interface UserService {
	public String login(User user);
	public void updateDB(String id, User user);
	
}
