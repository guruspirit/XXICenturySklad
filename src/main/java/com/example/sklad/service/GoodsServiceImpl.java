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
        return goodsRepository.findAllByName();
    }

    @Override
    public Goods listId(int id) {
        return goodsRepository.findAllById(id);
    }

    @Override
    public void add(Goods goods) {
        goodsRepository.add(goods.getName(),goods.getPrice());
    }

    @Override
    public void update(Goods goods) {
        goodsRepository.setGoodsById(goods.getId(),goods.getName(),goods.getPrice());
    }

    @Override
    public void delete(int id) {
        goodsRepository.deleteById(id);
    }
}
