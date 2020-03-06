package com.codeclan.example.RestaurantBooker.repositories.bookingRepository;

import com.codeclan.example.RestaurantBooker.Models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
