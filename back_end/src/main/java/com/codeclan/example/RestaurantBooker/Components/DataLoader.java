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

        Desk desk1 = new Desk(2, 1, true);
        deskRepository.save(desk1);

        Desk desk2 = new Desk(4, 2, true);
        deskRepository.save(desk2);

        Desk desk3 = new Desk(2, 3, true);
        deskRepository.save(desk3);

        Desk desk4 = new Desk(2, 4, true);
        deskRepository.save(desk4);

        Desk desk5 = new Desk(2, 5, false);
        deskRepository.save(desk5);

        Desk desk6 = new Desk(4, 6, false);
        deskRepository.save(desk6);

        Desk desk7 = new Desk(4, 7, false);
        deskRepository.save(desk7);

        Desk desk8 = new Desk(4, 8, false);
        deskRepository.save(desk8);

        Desk desk9 = new Desk(4, 9, false);
        deskRepository.save(desk9);

        Desk desk10 = new Desk(4, 10, false);
        deskRepository.save(desk10);

        Desk desk12 = new Desk(4, 11, false);
        deskRepository.save(desk12);

        Desk desk13 = new Desk(6, 12, false);
        deskRepository.save(desk13);

        Customer customer1 = new Customer("Stephen", "stephen@yahoo.co.uk", "074625242348");
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Cody", "Cody@email.com", "074625242348");
        customerRepository.save(customer2);

        Booking booking1 = new Booking("19:00", "2020-03-06", 2, customer2, desk1);
        bookingRepository.save(booking1);

        Booking booking2 = new Booking("12:30", "2020-03-07", 4, customer1, desk1);
        bookingRepository.save(booking2);

        Booking booking3 = new Booking("19:00", "2020-03-06", 6, customer2, desk13);
        bookingRepository.save(booking3);

        Booking booking4 = new Booking("23:50", "2015-03-07", 6, customer1, desk5);
        bookingRepository.save(booking4);

    }
}
