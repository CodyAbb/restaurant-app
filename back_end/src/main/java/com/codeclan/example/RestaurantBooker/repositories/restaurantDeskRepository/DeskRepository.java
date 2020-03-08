package com.codeclan.example.RestaurantBooker.repositories.restaurantDeskRepository;

import com.codeclan.example.RestaurantBooker.Models.Desk;
import com.codeclan.example.RestaurantBooker.projections.EmbedDesk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

public interface DeskRepository extends JpaRepository<Desk, Long> {
//    List<Desk> findByBookingsDate(String date);
}
