package com.demo.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.demo.entities.Account;
@Repository
public interface AccountRepository extends CrudRepository<Account, Integer>{
	
}
