package com.codeclan.example.RestaurantBooker.controllers;

import com.codeclan.example.RestaurantBooker.Models.Desk;
import com.codeclan.example.RestaurantBooker.repositories.restaurantDeskRepository.DeskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/desks")
public class DeskController {

    @Autowired
    DeskRepository deskRepository;

    @GetMapping(value = "/getAllBookingsForAGivenDesk")
    public List<Desk> getAllBookingsForAGivenDesk(String date){
        return deskRepository.getAllBookingsForAGivenDesk(date);
    }
}
