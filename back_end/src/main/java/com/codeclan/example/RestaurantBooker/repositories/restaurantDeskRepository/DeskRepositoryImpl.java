package com.codeclan.example.RestaurantBooker.repositories.restaurantDeskRepository;

import com.codeclan.example.RestaurantBooker.Models.Booking;
import com.codeclan.example.RestaurantBooker.Models.Desk;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.hibernate.hql.internal.ast.tree.RestrictableStatement;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class DeskRepositoryImpl implements DeskRepositoryCustom {
    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Desk> getAllDesksByTimeAndDate(String date, String time) {
        List<Desk> result = null;
        Session session = entityManager.unwrap(Session.class);
        try {
            Criteria criteria = session.createCriteria(Desk.class);
//            List<Desk> result1 = findByBookingsDate(date);
            criteria.createAlias("bookings", "bookingsAl");
            criteria.add(Restrictions.eq("bookingsAl.time", time));
            criteria.add(Restrictions.eq("bookingsAl.date", date));

            result = criteria.list();

        } catch (HibernateException ex) {
            ex.printStackTrace();
        }
    return result ;
    }
}