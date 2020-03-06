package com.codeclan.example.RestaurantBooker.repositories.customerRepository;

import com.codeclan.example.RestaurantBooker.Models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
