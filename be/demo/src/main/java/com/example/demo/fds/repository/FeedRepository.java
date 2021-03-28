package com.example.demo.fds.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.fds.domian.Feeds;


@Repository
public interface FeedRepository extends JpaRepository<Feeds, Long> {
	
	public List<Feeds> list() throws Exception;
	
	public void write(Feeds feeds) throws Exception;
	
	public Feeds view(int feeds) throws Exception;

}
