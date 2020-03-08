package com.codeclan.example.RestaurantBooker.projections;

import com.codeclan.example.RestaurantBooker.Models.Booking;
import com.codeclan.example.RestaurantBooker.Models.Customer;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedDesk", types = Booking.class)
public interface EmbedDesk {
    Long getId();
    String getTime();
    String getDate();
    int getNumberOfPeople();
    Customer getCustomer();
}
