package com.example.demo.entities;
// Generated Jun 6, 2024, 11:56:30 AM by Hibernate Tools 4.3.6.Final

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import jakarta.persistence.*;


/**
 * Account generated by hbm2java
 */
@Entity
@Table(name = "account", catalog = "baobongda")
public class Account implements java.io.Serializable {

	private Integer id;
	private String username;
	private String password;
	private String email;
	private Date created;
	private boolean status;
	private Set<Favorite> favorites = new HashSet<Favorite>(0);
	private Set<Comment> comments = new HashSet<Comment>(0);

	public Account() {
	}

	public Account(String username, String password, String email, Date created, boolean status) {
		this.username = username;
		this.password = password;
		this.email = email;
		this.created = created;
		this.status = status;
	}

	public Account(String username, String password, String email, Date created, boolean status,
			Set<Favorite> favorites, Set<Comment> comments) {
		this.username = username;
		this.password = password;
		this.email = email;
		this.created = created;
		this.status = status;
		this.favorites = favorites;
		this.comments = comments;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	@Column(name = "id", unique = true, nullable = false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column(name = "username", nullable = false, length = 250)
	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Column(name = "password", nullable = false, length = 250)
	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Column(name = "email", nullable = false, length = 250)
	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "created", nullable = false, length = 10)
	public Date getCreated() {
		return this.created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

	@Column(name = "status", nullable = false)
	public boolean isStatus() {
		return this.status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "account")
	public Set<Favorite> getFavorites() {
		return this.favorites;
	}

	public void setFavorites(Set<Favorite> favorites) {
		this.favorites = favorites;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "account")
	public Set<Comment> getComments() {
		return this.comments;
	}

	public void setComments(Set<Comment> comments) {
		this.comments = comments;
	}

}
