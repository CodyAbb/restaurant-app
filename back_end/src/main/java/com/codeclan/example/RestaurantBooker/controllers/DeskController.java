package com.codeclan.example.RestaurantBooker.controllers;

import com.codeclan.example.RestaurantBooker.repositories.restaurantDeskRepository.DeskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/desks")
public class DeskController {

    @Autowired
    DeskRepository deskRepository;
}
