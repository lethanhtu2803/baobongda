package com.example.demo.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Account;
@Repository
public interface AccountRepository extends CrudRepository<Account, Integer>{
	@Query("from Account where username = :username and password = :password and status = :status")
	public Account login(@Param("username") String username, @Param("password") String password,
			@Param("status") boolean status);
	@Query("from Account where username = :username")
	public Account findbyUsername(@Param("username") String username);
	@Query("from Account where email = :email")
	public Account findbyEmail(@Param("email") String email);
}
