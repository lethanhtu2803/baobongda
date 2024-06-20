package com.example.demo.services;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.example.demo.dtos.AccountDTO;
import com.example.demo.entities.Account;
import com.example.demo.entities.Comment;

public interface CommentService {
	public List<Comment> findAll();
	
}
