package com.example.sklad.controllers;

import com.example.sklad.entity.Goods;
import com.example.sklad.jpa.GoodsRepository;
import com.example.sklad.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200/", maxAge = 3600)
@RestController
@RequestMapping({"/goods"})
public class controller {
    @Autowired
    GoodsService goodsService;

    @GetMapping
    public List<Goods> selectAll(){
        return goodsService.selectAll();
    }

    @PostMapping
    public Goods add(@RequestBody Goods product){
        return goodsService.add(product);
    }
    @GetMapping(path={"/{id}"})
    public Goods listId(@PathVariable("id") int id){
        return goodsService.listId(id);
    }
    @PutMapping(path={"/{id}"})
    public Goods update(@RequestBody Goods product, @PathVariable("id") int id){
        product.setId(id);
        return goodsService.update(product);
    }
}
