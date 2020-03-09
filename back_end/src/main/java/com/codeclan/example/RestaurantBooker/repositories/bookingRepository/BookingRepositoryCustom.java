package com.codeclan.example.RestaurantBooker.repositories.bookingRepository;

import com.codeclan.example.RestaurantBooker.Models.Booking;

import java.util.List;

public interface BookingRepositoryCustom {
    List<Booking> getAllBookingsWithCustomer();
}

