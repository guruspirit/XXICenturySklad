package com.example.sklad.service;

import com.example.sklad.entity.Goods;
import com.example.sklad.jpa.GoodsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class GoodsServiceImpl implements GoodsService{

    @Autowired
    GoodsRepository goodsRepository;

    @Override
    public List<Goods> selectAll() {
        return goodsRepository.findAll();
    }

    @Override
    public Goods listId(int id) {
        return goodsRepository.findOneById(id);
    }

    @Override
    public Goods add(Goods product) {
//        throw new UnsupportedOperationException("Not realized yet...");
        return goodsRepository.save(product);
    }

    @Override
    public Goods update(Goods product) {
        return goodsRepository.save(product);
    }

    @Override
    public Goods delete(int id) {
        Goods product = new Goods();
        product = listId(id);
        goodsRepository.deleteById(id);
        return product;
    }
}
