package com.example.sklad.service;

import com.example.sklad.entity.Goods;

import java.util.List;

public interface GoodsService {
    List<Goods> selectAll(); //
    Goods listId(int id);
    Goods add(Goods product); //
    Goods update(Goods product); //
    Goods delete(int id); //
}
