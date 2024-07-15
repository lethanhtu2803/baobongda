package com.example.demo.services;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dtos.AccountDTO;
import com.example.demo.dtos.CommentDTO;
import com.example.demo.entities.Account;
import com.example.demo.entities.Comment;
import com.example.demo.repositories.AccountRepository;
import com.example.demo.repositories.CommentRepository;
@Service
public class CommentServiceImplement implements CommentService{
	@Autowired
	private CommentRepository commentRepository;
	@Autowired
	private AccountService accountService;
	@Autowired
	private ModelMapper mapper;
	@Override
	public List<Comment> findAll() {
		return mapper.map(commentRepository.findAll(), new TypeToken<List<CommentDTO>>() {}.getType());
	}
	@Override
	public long countComment(String link) {
		return commentRepository.countComment(link);
	}
	@Override
	public boolean save(CommentDTO commentDTO) {
		try {
			commentDTO.setAccountID(accountService.findByUsername(commentDTO.getAccountUsername()).getId());
			commentDTO.setAccountFullName(accountService.findByUsername(commentDTO.getAccountUsername()).getFullName());
			commentDTO.setCreated(new Timestamp(new Date().getTime()));
			Comment comment =  mapper.map(commentDTO, Comment.class);
			comment.setAccount(accountService.findByID(commentDTO.getAccountID()));
			commentRepository.save(comment);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	@Override
	public List<CommentDTO> findCommentByLink(String link) {
		return mapper.map(commentRepository.findCommentByLink(link), new TypeToken<List<CommentDTO>>() {}.getType());
	}
	

}
