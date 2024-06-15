package com.demo.entities;
import jakarta.persistence.*;

	@Entity
	@Table(name = "account")
	public class Account {
	
	private int id;
	private String username;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@Column(name = "username", length = 250, nullable = false)
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Account(int id, String username) {
		super();
		this.id = id;
		this.username = username;
	}
	public Account() {
		super();
	}
	@Override
	public String toString() {
		return "Account [id=" + id + ", username=" + username + "]";
	}
	
}
