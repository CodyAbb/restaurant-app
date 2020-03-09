package com.codeclan.example.RestaurantBooker.repositories.bookingRepository;

import com.codeclan.example.RestaurantBooker.Models.Booking;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class BookingRepositoryImpl implements BookingRepositoryCustom{
    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Booking> getAllBookingsWithCustomer() {
        List<Booking> result = null;
        Session session = entityManager.unwrap(Session.class);
        try {
            Criteria criteria = session.createCriteria(Booking.class);
            criteria.createAlias("customer", "customerAl");
            criteria.createAlias("desk", "deskAl");

            result = criteria.list();
        } catch (HibernateException ex) {
            ex.printStackTrace();
        }
        return result;
    }
}
