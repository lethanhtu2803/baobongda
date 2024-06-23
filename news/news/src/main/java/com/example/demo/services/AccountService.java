package com.example.demo.services;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.example.demo.dtos.AccountDTO;
import com.example.demo.entities.Account;

public interface AccountService {
	public List<Account> findAll();
	public boolean login(String username,  String password, boolean status);
	public boolean save(com.example.demo.dtos.AccountDTO accountDTO);
	public AccountDTO findByUsername(String username);
	public Account findByID(int id);
}
