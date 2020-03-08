package com.codeclan.example.RestaurantBooker.Components;

import com.codeclan.example.RestaurantBooker.Models.Booking;
import com.codeclan.example.RestaurantBooker.Models.Customer;
import com.codeclan.example.RestaurantBooker.Models.Desk;
import com.codeclan.example.RestaurantBooker.repositories.bookingRepository.BookingRepository;
import com.codeclan.example.RestaurantBooker.repositories.customerRepository.CustomerRepository;
import com.codeclan.example.RestaurantBooker.repositories.restaurantDeskRepository.DeskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.awt.print.Book;


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

        Desk desk2 = new Desk(4, 1, true);
        deskRepository.save(desk2);

        Desk desk3 = new Desk(2, 1, true);
        deskRepository.save(desk3);

        Booking booking2 = new Booking("12:30", "07/03/20", 4, customer1, desk1);
        bookingRepository.save(booking2);

        Booking booking3 = new Booking("15:30", "07/03/20", 4, customer1, desk1);
        bookingRepository.save(booking3);

        Booking booking4 = new Booking("18:30", "07/03/20", 4, customer1, desk1);
        bookingRepository.save(booking4);
    }
}
