package com.example.sklad.service;

import com.example.sklad.entity.Goods;

import java.util.List;

public interface GoodsServiceImpl {
    List<Goods> list();
    Goods listId(int id);
    Goods add(Goods goods);
    Goods edit(Goods goods);
    Goods delete(int id);
}
