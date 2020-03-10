package com.codeclan.example.RestaurantBooker.repositories.restaurantDeskRepository;

import com.codeclan.example.RestaurantBooker.Models.Desk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import sun.security.krb5.internal.crypto.Des;

import java.util.List;

public interface DeskRepository extends JpaRepository<Desk, Long>, DeskRepositoryCustom {
    List<Desk> findByBookingsDate(String date);
    List<Desk> getAllDesksByTimeAndDate(String time, String date);
//    List<Desk> findNotByBookingsDate(String date);
    List<Desk> findDesksWhereIdNotNull();

    @Query(value = "SELECT * FROM desks LEFT OUTER JOIN bookings ON desks.id = bookings.desk_id AND date = ?1", nativeQuery = true)
    List<Desk> getAllBookingsForAGivenDesk(String date);

}
