package com.example.sklad.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Order_line {
    @Id
    @GeneratedValue
    private int id;
    private int order_id;
    private int goods_id;
    private int count;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getOrder_id() {
        return order_id;
    }

    public void setOrder_id(int order_id) {
        this.order_id = order_id;
    }

    public int getGoods_id() {
        return goods_id;
    }

    public void setGoods_id(int goods_id) {
        this.goods_id = goods_id;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public Order_line(int order_id, int goods_id, int count) {
        this.order_id = order_id;
        this.goods_id = goods_id;
        this.count = count;
    }

    public Order_line() {

    }
}
