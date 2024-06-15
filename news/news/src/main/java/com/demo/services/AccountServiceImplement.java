package com.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.entities.Account;
import com.demo.repositories.AccountRepository;
@Service
public class AccountServiceImplement implements AccountService{
	@Autowired
	private AccountRepository accountRepository;
	@Override
	public Iterable<Account> findAll() {
		return accountRepository.findAll();
	}

}
