package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dtos.AccountDTO;
import com.example.demo.dtos.CommentDTO;
import com.example.demo.entities.Account;
import com.example.demo.entities.Comment;
import com.example.demo.services.AccountService;
import com.example.demo.services.CommentService;

@RestController
@RequestMapping("api/comment")
public class CommentController {
	@Autowired
	private CommentService commentService;
	@GetMapping(value = "findAll", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
	public ResponseEntity<Iterable<Comment>> findAll(){
		try {
			return new ResponseEntity<Iterable<Comment>>(commentService.findAll() ,HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Iterable<Comment>>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping(value = "countComment/{link}", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> countComment(@PathVariable("link") String link){
		try {
			return new ResponseEntity<Object>(new Object() {
				public long count = commentService.countComment(link);
			}, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping(value = "create", consumes = MimeTypeUtils.APPLICATION_JSON_VALUE, produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> create(@RequestBody CommentDTO commentDTO) {
		try {
			return new ResponseEntity<Object>(new Object() {
				public boolean status = commentService.save(commentDTO);
			}, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping(value = "findCommentByLink",  produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<CommentDTO>> findCommentByLink(@RequestParam("link") String link){
		try {
			return new ResponseEntity<List<CommentDTO>>(commentService.findCommentByLink(link) ,HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<List<CommentDTO>>(HttpStatus.BAD_REQUEST);
		}
	}

}
