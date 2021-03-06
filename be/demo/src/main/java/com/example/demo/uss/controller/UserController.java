package com.example.demo.uss.controller;

import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.fds.domian.Feeds;
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
		
		System.out.println("---insert 작동!---");
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
	public ResponseEntity<?> login(
			@RequestBody User user) throws IOException {
			sv.findAll();
		System.out.println("sv.findAll() = " + sv.findAll());
			String login = sv.login(user);
		System.out.println("---login 작동!---");
		System.out.println("user = " + user);
		System.out.println("userToString = " + user.toString());
		System.out.println("user.getUserNo() = " + user.getUserNo());
		
		if(login != null) {
			System.out.println("로그인을 성공하셨습니다");
			System.out.println("userNo = " + user.getUserNo());
			System.out.println("username = " + user.getUsername());
			System.out.println("password = " + user.getPassword());
			
			return new ResponseEntity<>(login, HttpStatus.OK);
		} else {
			System.out.println("로그인을 실패하셨습니다");
			System.out.println("userNo = " + user.getUserNo());
			System.out.println("username = " + user.getUsername());
			System.out.println("password = " + user.getPassword());
			
			return new ResponseEntity<>(login, HttpStatus.UNAUTHORIZED);
		}
	}
	
	 @PutMapping("/{username}")
	    public ResponseEntity<String> update(
	    		@RequestBody User user,
	    		@PathVariable String username){
	    	System.out.println("-----update 작동중-----");
	    	System.out.println("username = " + username);
	    	System.out.println("user.getUserNo = " + user.getUserNo());
	    	
	    	sv.updateDB(username, user);
	    	
			return new ResponseEntity<>("update success", HttpStatus.OK);
	    }
    

}
