package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Account;
import com.example.demo.entities.Comment;
import com.example.demo.entities.Favorite;
@Repository
public interface FavoriteRepository extends CrudRepository<Favorite, Integer>{
	@Query("from Favorite where account.id = :id")
	public List<Favorite> findFavoriteByAccountID(@Param("id") int id);
	@Query("select count(link) from Favorite where link = :link and account.id = :id")
	public long countFavoriteByAccountID(@Param("link") String link, @Param("id") int id);
}
