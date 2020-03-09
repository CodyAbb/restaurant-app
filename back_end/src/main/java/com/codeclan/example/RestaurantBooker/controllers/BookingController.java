package com.codeclan.example.RestaurantBooker.controllers;

import com.codeclan.example.RestaurantBooker.Models.Booking;
import com.codeclan.example.RestaurantBooker.repositories.bookingRepository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/bookings")
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping(value = "/customerAndDesk")
    public List<Booking> getAllBookingsWithCustomer() {
        return bookingRepository.getAllBookingsWithCustomer();
    }


}
