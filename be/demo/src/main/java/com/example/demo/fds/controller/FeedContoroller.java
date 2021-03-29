package com.example.demo.fds.controller;


import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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
@CrossOrigin(origins="*")
public class FeedContoroller {
	
	private final FeedServiceImpl service;

	    @PostMapping("/create")
	    public ResponseEntity<?> insert(
	    		@RequestBody Feeds feeds){
	    	service.save(feeds);
	    	
	    	return new ResponseEntity<>(HttpStatus.OK);
	    }
	    
	    @GetMapping("/list")
	    public ResponseEntity<?> findAll(){
	    		System.out.println("getFeedsFindAll()");
	   
			return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
	    }
	   
}
