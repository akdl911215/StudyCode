package com.example.demo.fds.service;

import com.example.demo.fds.domian.Feeds;

public interface FeedService {
	public void create(Feeds feeds);
	public Feeds detail(long feedNo);
	public void updateDB(long id, Feeds feeds);
}
