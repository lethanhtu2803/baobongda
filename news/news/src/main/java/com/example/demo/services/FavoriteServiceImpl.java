package com.example.demo.services;

import java.util.Date;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dtos.CommentDTO;
import com.example.demo.dtos.FavoriteDTO;
import com.example.demo.entities.Comment;
import com.example.demo.entities.Favorite;
import com.example.demo.repositories.AccountRepository;
import com.example.demo.repositories.FavoriteRepository;

@Service
public class FavoriteServiceImpl implements FavoriteService{
	@Autowired
	private FavoriteRepository favoriteRepository;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private AccountRepository accountRepository;
	@Override
	public List<Favorite> findAll() {
		return mapper.map(favoriteRepository.findAll(),  new TypeToken<List<FavoriteDTO>>() {}.getType());
	}

	@Override
	public boolean countFavoriteByAccountID(String link, int id) {
		return favoriteRepository.countFavoriteByAccountID(link, id) > 0;
	}

	@Override
	public boolean save(FavoriteDTO favoriteDTO) {
		try {
			favoriteDTO.setAccountID(accountRepository.findbyUsername(favoriteDTO.getAccountUsername()).getId());
			Favorite favorite = mapper.map(favoriteDTO, Favorite.class);
			favorite.setAccount(accountRepository.findById(favoriteDTO.getAccountID()).get());
			favoriteRepository.save(favorite);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public List<FavoriteDTO> findFavoriteByAccountID(int id) {
		return mapper.map(favoriteRepository.findFavoriteByAccountID(id),  new TypeToken<List<FavoriteDTO>>() {}.getType());
	}

	@Override
	public boolean delete(int id) {
		try {
			favoriteRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	
	
}
