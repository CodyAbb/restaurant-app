package com.codeclan.example.RestaurantBooker.Models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "desks")
public class Desk {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "pax")
    private int pax;

    @Column(name = "priority")
    private int priority;

    @Column(name = "duration")
    private int duration;

    @Column(name = "is_accessible")
    private Boolean isAccessible;

    @JsonIgnoreProperties("desk")
    @OneToMany(mappedBy = "desk", fetch = FetchType.LAZY)
    private List<Booking> bookings;

    public Desk(int pax, int priority, Boolean isAccessible) {
        this.pax = pax;
        this.priority = priority;
        this.duration = 2;
        this.isAccessible = isAccessible;
        this.bookings = new ArrayList<>();
    }

    public Desk(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getPax() {
        return pax;
    }

    public void setPax(int pax) {
        this.pax = pax;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public Boolean getAccessible() {
        return isAccessible;
    }

    public void setAccessible(Boolean accessible) {
        isAccessible = accessible;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }
}
