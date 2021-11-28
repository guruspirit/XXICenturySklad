package com.example.sklad.repository;

import com.example.sklad.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Integer> {
    List<Order> findByClient(String client);

    //JPQL
    @Query("select p from `order` p order by client")
        List<Order> findAllOrderedByClient();

}
