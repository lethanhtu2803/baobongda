package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
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
import com.example.demo.dtos.FavoriteDTO;
import com.example.demo.entities.Account;
import com.example.demo.entities.Comment;
import com.example.demo.entities.Favorite;
import com.example.demo.services.AccountService;
import com.example.demo.services.CommentService;
import com.example.demo.services.FavoriteService;

@RestController
@RequestMapping("api/favorite")
public class FavoriteController {
	@Autowired
	private FavoriteService favoriteService;
	@Autowired
	private AccountService accountService;
	@GetMapping(value = "findAll", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
	public ResponseEntity<Iterable<Favorite>> findAll(){
		try {
			return new ResponseEntity<Iterable<Favorite>>(favoriteService.findAll() ,HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Iterable<Favorite>>(HttpStatus.BAD_REQUEST);
		}
	}
	
//	@GetMapping(value = "countComment/{link}", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
//	public ResponseEntity<Object> countComment(@PathVariable("link") String link){
//		try {
//			return new ResponseEntity<Object>(new Object() {
//				public long count = commentService.countComment(link);
//			}, HttpStatus.OK);
//		} catch (Exception e) {
//			e.printStackTrace();
//			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
//		}
//	}
//	
	@PostMapping(value = "create", consumes = MimeTypeUtils.APPLICATION_JSON_VALUE, produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> create(@RequestBody FavoriteDTO commentDTO) {
		try {
			return new ResponseEntity<Object>(new Object() {
				public boolean status = favoriteService.save(commentDTO);
			}, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
		}
	}
	@PutMapping(value = "update", consumes = MimeTypeUtils.APPLICATION_JSON_VALUE, produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> update(@RequestBody FavoriteDTO commentDTO) {
		try {
			return new ResponseEntity<Object>(new Object() {
				public boolean status = favoriteService.save(commentDTO);
			}, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
		}
	}
	@GetMapping(value = "findFavoriteByAccountID/{username}", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<FavoriteDTO>> findCommentByLink(@PathVariable("username") String username){
		try {
			return new ResponseEntity<List<FavoriteDTO>>(favoriteService.findFavoriteByAccountID(accountService.findByUsername(username).getId()) ,HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<List<FavoriteDTO>>(HttpStatus.BAD_REQUEST);
		}
	}
	@DeleteMapping(value = "delete/{id}", consumes = MimeTypeUtils.APPLICATION_JSON_VALUE, produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> delete(@PathVariable("id") int id) {
		try {
			return new ResponseEntity<Object>(new Object() {
				public boolean status = favoriteService.delete(id);
			}, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
		}
	}
	@GetMapping(value = "countFavoriteByAccountID", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> countComment(@RequestParam("link") String link, @RequestParam("username") String username){
		try {
			return new ResponseEntity<Object>(new Object() {
				public boolean status = favoriteService.countFavoriteByAccountID(link, accountService.findByUsername(username).getId());
			}, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
		}
	}
}
