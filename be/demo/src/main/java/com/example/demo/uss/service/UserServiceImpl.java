package com.example.demo.uss.service;


import java.util.*;

import org.springframework.stereotype.Service;

import com.example.demo.cmm.service.AbstractService;
import com.example.demo.uss.domain.User;
import com.example.demo.uss.repository.UserRepository;

import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserServiceImpl extends AbstractService<User> implements UserService {

	private final UserRepository repo; 
	
	@Override
	public long count() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean existsById(long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<User> findOne() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteById(long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public User getOne(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void save(User entity) {
		repo.save(entity);
	}

	@Override
	public User findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}



}