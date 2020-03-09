package com.codeclan.example.RestaurantBooker.repositories.bookingRepository;

import com.codeclan.example.RestaurantBooker.Models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;


public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByDate(String date);
}
