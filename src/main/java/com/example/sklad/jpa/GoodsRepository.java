package com.example.sklad.jpa;

import com.example.sklad.entity.Goods;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GoodsRepository extends JpaRepository<Goods, Integer> {
    @Query("select g from Goods g order by g.name")
    List<Goods> findAllByName();

}
