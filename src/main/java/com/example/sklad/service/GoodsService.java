package com.example.sklad.service;

import com.example.sklad.entity.Goods;

import java.util.List;

public interface GoodsService {
    List<Goods> selectAll(); //
    Goods listId(int id);
    void add(Goods goods); //
    void update(Goods goods); //
    void delete(int id); //
}
