package com.example.demo.dtos;

import java.util.Date;

import com.example.demo.entities.Account;

public class FavoriteDTO {
	private Integer id;
	private String accountUsername;
	private String link;
	private String description;
	private Date pubDate;
	private String image;
	private Date created;
	private String title;
	private String category;
	private boolean status;
	private int accountID;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getAccountUsername() {
		return accountUsername;
	}
	public void setAccountUsername(String accountUsername) {
		this.accountUsername = accountUsername;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getPubDate() {
		return pubDate;
	}
	public void setPubDate(Date pubDate) {
		this.pubDate = pubDate;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public Date getCreated() {
		return created;
	}
	public void setCreated(Date created) {
		this.created = created;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public FavoriteDTO(Integer id, String accountUsername, String link, String description, Date pubDate, String image,
			Date created, String title, String category, boolean status) {
		super();
		this.id = id;
		this.accountUsername = accountUsername;
		this.link = link;
		this.description = description;
		this.pubDate = pubDate;
		this.image = image;
		this.created = created;
		this.title = title;
		this.category = category;
		this.status = status;
	}
	public FavoriteDTO() {
		super();
	}
	public int getAccountID() {
		return accountID;
	}
	public void setAccountID(int accountID) {
		this.accountID = accountID;
	}
	

}
