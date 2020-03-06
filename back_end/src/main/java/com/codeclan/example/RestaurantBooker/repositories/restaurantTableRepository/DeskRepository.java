package com.codeclan.example.RestaurantBooker.repositories.restaurantTableRepository;

import com.codeclan.example.RestaurantBooker.Models.Desk;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeskRepository extends JpaRepository<Desk, Long> {
}
