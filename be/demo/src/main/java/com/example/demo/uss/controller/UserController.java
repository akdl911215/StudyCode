package com.example.demo.uss.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.uss.domain.User;
import com.example.demo.uss.service.UserServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
@CrossOrigin(origins="*")
public class UserController {
	
	private final UserServiceImpl sv;
	
	@PostMapping("/insert")
	public ResponseEntity<String> insert(
			@RequestBody User user) {
		
		System.out.println("---insert �۵�!---");
		System.out.println("users = " + user.toString());
		System.out.println("username = " + user.getUsername());
		System.out.println("password = " + user.getPassword());
		System.out.println("userEmail = " + user.getUserEmail());
		System.out.println("userAddress = " + user.getUserAddress());
		System.out.println("userPhoneNumber = " + user.getUserPhoneNumber());
		System.out.println("userNo = " + user.getUserNo());
		
		
		sv.save(user);
		
		return new ResponseEntity<>("insert success", HttpStatus.OK);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> doLogin(
			@RequestBody User user) {
		System.out.println("---login �۵�!---");
		
		sv.save(user);
		
		return new ResponseEntity<>("Login success", HttpStatus.OK);
	}

}
