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
import com.example.demo.entities.Account;



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
				map().setCreated(source.getCreated());
				map().setEmail(source.getEmail());
				map().setPassword(source.getPassword());
				map().setUsername(source.getUsername());
				map().setStatus(source.isStatus());
				
			}
			
		});

		return mapper;
	}
}