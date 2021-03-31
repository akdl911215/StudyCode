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
		
		sv.save(user);
		
		return new ResponseEntity<>("insert success", HttpStatus.OK);
	}

}