package com.example.demo.fds.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.fds.domian.Feeds;
import com.example.demo.fds.service.FeedServiceImpl;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor 
@RestController
@RequestMapping("/feeds")
@CrossOrigin(origins = "*")
public class FeedContoroller {
	
	private final FeedServiceImpl service;
	
	@PostMapping("/create")
	public ResponseEntity<Feeds> info( @RequestBody Feeds feeds){
		return new ResponseEntity<Feeds>(HttpStatus.OK);
	}
}
