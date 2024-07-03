package com.example.demo.services;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.example.demo.dtos.AccountDTO;
import com.example.demo.dtos.CommentDTO;
import com.example.demo.dtos.FavoriteDTO;
import com.example.demo.entities.Account;
import com.example.demo.entities.Comment;
import com.example.demo.entities.Favorite;

public interface FavoriteService {
	public List<Favorite> findAll();
	public boolean countFavoriteByAccountID(String link, int accountID);
	public boolean save(FavoriteDTO favoriteDTO);
	public List<FavoriteDTO> findFavoriteByAccountID(int id);
	public boolean delete(int id);
}
