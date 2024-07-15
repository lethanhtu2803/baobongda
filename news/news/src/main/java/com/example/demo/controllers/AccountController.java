package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dtos.AccountDTO;
import com.example.demo.entities.Account;
import com.example.demo.services.AccountService;

@RestController
@RequestMapping("api/account")
@CrossOrigin(origins = "http://localhost:3000")
public class AccountController {
	@Autowired
	private AccountService accountService;
	@GetMapping(value = "findAll", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
	public ResponseEntity<Iterable<Account>> findAll(){
		try {
			return new ResponseEntity<Iterable<Account>>(accountService.findAll() ,HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Iterable<Account>>(HttpStatus.BAD_REQUEST);
		}
	}
	@PostMapping(value = "login", produces = MimeTypeUtils.APPLICATION_JSON_VALUE, consumes = MimeTypeUtils.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> login(@RequestBody AccountDTO accountDTO){
		try {
			return new ResponseEntity<Object>(new Object() {
				public boolean status = accountService.login(accountDTO.getUsername(), accountDTO.getPassword(), true);
			}  ,HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
		}
	}
	@PostMapping(value = "create", consumes = MimeTypeUtils.APPLICATION_JSON_VALUE, produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> create(@RequestBody AccountDTO accountDTO) {
		try {
			return new ResponseEntity<Object>(new Object() {
				public boolean status = accountService.save(accountDTO);
			}, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
		}
	}
	@PutMapping(value = "update", consumes = MimeTypeUtils.APPLICATION_JSON_VALUE, 
			produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
		public ResponseEntity<Object> update(@RequestBody AccountDTO accountDTO) {
			try {
				return new ResponseEntity<Object>(new Object() {
					public boolean result = accountService.save(accountDTO);
				}, HttpStatus.OK);
			} catch (Exception e) {
				e.printStackTrace();
				return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
			}
		}
	@GetMapping(value = "findByUsername/{username}", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
	public ResponseEntity<AccountDTO> findByUsername(@PathVariable("username") String username){
		try {
			return new ResponseEntity<AccountDTO>(accountService.findByUsername(username), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<AccountDTO>(HttpStatus.BAD_REQUEST);
		}
	}
	@GetMapping(value = "findByEmail/{email}", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
	public ResponseEntity<AccountDTO> findByEmail(@PathVariable("email") String email){
		try {
			return new ResponseEntity<AccountDTO>(accountService.findByEmail(email), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<AccountDTO>(HttpStatus.BAD_REQUEST);
		}
	}
}
