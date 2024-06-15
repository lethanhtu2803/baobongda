package com.demo.services;

import com.demo.entities.Account;

public interface AccountService {
	public Iterable<Account> findAll();
}
