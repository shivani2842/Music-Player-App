package com.teamsixx.musixapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teamsixx.musixapp.exception.SongAlreadyExistsException;
import com.teamsixx.musixapp.model.Recommend;
import com.teamsixx.musixapp.repository.RecommendRepository;

@Service
public class RecommendService {
	@Autowired
	private RecommendRepository rr;
	
	public Recommend saveModel(Recommend m) throws SongAlreadyExistsException {
		Optional<Recommend> op=rr.findByUsernameAndUrl(m.getUsername(),m.getUrl());
		if(op.isPresent())
		{
			 throw new SongAlreadyExistsException();
		}
		else
		{
		Recommend bk=rr.save(m);
		return bk;
		}

	}

	public List<Recommend> getModelByEmail(String user)throws Exception 
	{

		List<Recommend> l=rr.findAllByUsername(user);
		return l;
	}


}
