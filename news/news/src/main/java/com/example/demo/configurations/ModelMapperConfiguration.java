package com.example.demo.configurations;

import org.modelmapper.AbstractConverter;
import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

import com.example.demo.dtos.AccountDTO;
import com.example.demo.dtos.CommentDTO;
import com.example.demo.entities.Account;
import com.example.demo.entities.Comment;



@Configuration
public class ModelMapperConfiguration {
	@Autowired
	private Environment environment;

	@Autowired


	@Bean
	public ModelMapper modelMapper() {
		ModelMapper mapper = new ModelMapper();
		mapper.addMappings(new PropertyMap<Account, AccountDTO>() {

			@Override
			protected void configure() {
				map().setId(source.getId());
				map().setFullName(source.getFullName());
				map().setCreated(source.getCreated());
				map().setEmail(source.getEmail());
				map().setPassword(source.getPassword());
				map().setUsername(source.getUsername());
				map().setStatus(source.isStatus());
				
			}
			
		});
		mapper.addMappings(new PropertyMap<Comment, CommentDTO>() {

			@Override
			protected void configure() {
				map().setId(source.getId());
				map().setAccountFullName(source.getAccount().getFullName());
				map().setAccountID(source.getAccount().getId());
				map().setCategory(source.getCategory());
				map().setContent(source.getContent());
				map().setImage(source.getImage());
				map().setTitle(source.getTitle());
				map().setLink(source.getLink());
				map().setStatus(source.isStatus());
				map().setDescription(source.getDescription());
				map().setCreated(source.getCreated());
				map().setPubDate(source.getPubDate());
				map().setAccountUsername(source.getAccount().getUsername());
				
			}
			
		});

		return mapper;
	}
}