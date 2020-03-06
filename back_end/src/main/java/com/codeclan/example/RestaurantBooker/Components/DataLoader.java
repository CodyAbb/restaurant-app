package com.codeclan.example.RestaurantBooker.Components;

import com.codeclan.example.RestaurantBooker.Models.Booking;
import com.codeclan.example.RestaurantBooker.Models.Customer;
import com.codeclan.example.RestaurantBooker.Models.Desk;
import com.codeclan.example.RestaurantBooker.repositories.bookingRepository.BookingRepository;
import com.codeclan.example.RestaurantBooker.repositories.customerRepository.CustomerRepository;
import com.codeclan.example.RestaurantBooker.repositories.restaurantTableRepository.DeskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;


@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    DeskRepository deskRepository;

    @Autowired
    BookingRepository bookingRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args){
        Customer customer1 = new Customer("Stephen", "stephen@yahoo.co.uk", "074625242348");
        customerRepository.save(customer1);

        Desk desk1 = new Desk(2, 1, true);
        deskRepository.save(desk1);

        Booking booking1 = new Booking("19:00", "06/03/20", 1, customer1, desk1);
        bookingRepository.save(booking1);
    }
}
