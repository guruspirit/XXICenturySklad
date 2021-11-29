package com.example.sklad.query;

import com.example.sklad.entity.Goods;
import com.example.sklad.jpa.GoodsRepository;
import org.springframework.beans.factory.annotation.Autowired;


public class queryGoods {

    @Autowired
    GoodsRepository goodsRepository;

    public void add(String name, Double price) {
        Goods goods = new Goods(name,price);
        goodsRepository.save(goods);
    }


}
