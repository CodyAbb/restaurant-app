package com.codeclan.example.RestaurantBooker.Models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "time")
    private String time;

    @Column(name = "date")
    private String date;

    @Column(name = "number_of_people")
    private int numberOfPeople;

    @JsonIgnoreProperties("booking")
    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = true)
    private Customer customer;

    @JsonIgnoreProperties("bookings")
    @ManyToOne
    @JoinColumn(name = "desk_id", nullable = false)
    private Desk desk;

    public Booking(String time, String date, int numberOfPeople, Customer customer, Desk desk) {
        this.time = time;
        this.date = date;
        this.numberOfPeople = numberOfPeople;
        this.customer = customer;
        this.desk = desk;

    }

    public Booking(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getNumberOfPeople() {
        return numberOfPeople;
    }

    public void setNumberOfPeople(int numberOfPeople) {
        this.numberOfPeople = numberOfPeople;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Desk getDesk() {
        return desk;
    }

    public void setDesk(Desk desk) {
        this.desk = desk;
    }
}
