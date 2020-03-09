package com.codeclan.example.RestaurantBooker;

import com.codeclan.example.RestaurantBooker.repositories.restaurantDeskRepository.DeskRepository;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class RestaurantBookerApplicationTests {

	@Autowired
	DeskRepository deskRepository;

	@Test
	void contextLoads() {

	}

}

