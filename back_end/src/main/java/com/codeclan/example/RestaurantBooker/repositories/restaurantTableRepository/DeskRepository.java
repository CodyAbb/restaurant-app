package com.codeclan.example.RestaurantBooker.repositories.restaurantTableRepository;

import com.codeclan.example.RestaurantBooker.Models.RestaurantTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantTableRepository extends JpaRepository<RestaurantTable, Long> {
}
