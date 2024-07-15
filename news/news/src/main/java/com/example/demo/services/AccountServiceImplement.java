package com.example.demo.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dtos.AccountDTO;
import com.example.demo.entities.Account;
import com.example.demo.repositories.AccountRepository;
@Service
public class AccountServiceImplement implements AccountService{
	@Autowired
	private AccountRepository accountRepository;
	@Autowired
	private ModelMapper mapper;
	@Override
	public List<Account> findAll() {
		return mapper.map(accountRepository.findAll(), new TypeToken<List<AccountDTO>>() {}.getType());
	}
	@Override
	public boolean login(String username, String password, boolean status) {
		// TODO Auto-generated method stub
		return accountRepository.login(username, password, status) != null;
	}
	@Override
	public boolean save(AccountDTO accountDTO) {
		try {
			Account account =  mapper.map(accountDTO, Account.class);
			accountRepository.save(account);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	@Override
	public AccountDTO findByUsername(String username) {
		// TODO Auto-generated method stub
		return mapper.map(accountRepository.findbyUsername(username), new AccountDTO().getClass());
	}
	@Override
	public AccountDTO findByEmail(String email) {
		// TODO Auto-generated method stub
		return mapper.map(accountRepository.findbyEmail(email), new AccountDTO().getClass());
	}
	@Override
	public Account findByID(int id) {
		return accountRepository.findById(id).get();
	}

}
