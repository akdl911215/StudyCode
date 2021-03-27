package com.example.demo.fds.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.cmm.service.AbstractService;
import com.example.demo.fds.domian.Feeds;
import com.example.demo.fds.repository.FeedRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FeedServiceImpl extends AbstractService<Feeds> implements FeedService {
	
	private final FeedRepository repo;

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
	public List<Feeds> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Feeds> findOne() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteById(long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Feeds getOne(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Feeds save(Feeds entity) {
		// TODO Auto-generated method stub
		return repo.save(entity);
	}

}
