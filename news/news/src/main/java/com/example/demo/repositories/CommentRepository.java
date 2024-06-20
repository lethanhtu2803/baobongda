package com.example.demo.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Account;
import com.example.demo.entities.Comment;
@Repository
public interface CommentRepository extends CrudRepository<Comment, Integer>{
	
}
