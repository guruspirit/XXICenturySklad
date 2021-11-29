package com.example.sklad.jpa;

import com.example.sklad.entity.Goods;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface GoodsRepository extends JpaRepository<Goods, Integer> {

    @Modifying
    @Query(value = "insert into Goods values(?1,?2)", nativeQuery = true)
    void add(String name, Double price); //

    @Modifying
    @Query("update Goods g set g.name=?2, g.price=?3 where g.id=?1")
    void setGoodsById(int id, String name, Double price); //

    void deleteById(int id); //delete

    List<Goods> findAllByName(); //selectAll

    //find by id - найти по id - where id = ?1
    //@Query("select g from Goods g where g.id = ?1")
    Goods  findAllById(int id); //listId


}
