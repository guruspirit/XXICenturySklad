package com.example.sklad.jpa;

import com.example.sklad.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PersonRepository extends JpaRepository<Order, Integer> {
    List<Order> findByClient(String client);
    @Query("select o.client from Order o order by o.client")
    List<Order> findAllOrderedByClient();

}

