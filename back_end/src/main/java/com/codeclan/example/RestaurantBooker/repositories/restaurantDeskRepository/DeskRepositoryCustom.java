package com.codeclan.example.RestaurantBooker.repositories.restaurantDeskRepository;

import com.codeclan.example.RestaurantBooker.Models.Desk;

import java.util.List;

public interface DeskRepositoryCustom {
    List<Desk> getAllDesksByTimeAndDate(String time, String date);
}
