package com.example.demo.fds.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.fds.domian.Feeds;

interface CustomRepository{} 

public interface FeedRepository extends JpaRepository<Feeds, Long>, CustomRepository{
	

	
}
