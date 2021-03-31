package com.example.demo.fds.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.fds.domian.Feeds;

interface CustomRepository{} 
@Repository
public interface FeedRepository extends JpaRepository<Feeds, Long>, CustomRepository{
	

	public Feeds findByFeedNo(@Param("feedNo") Long feedNo);

	
	
}
