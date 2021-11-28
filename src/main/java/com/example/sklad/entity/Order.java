package com.example.sklad.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

//public List<Order> orders = new ArrayList<>();
@Entity
@Table(name = "`order`")
public class Order {
    @Id
    @GeneratedValue
    private int id;

    private String client;
    private String date;
    private String address;

    public Order() {
    }

    public Order(int id, String client, String date, String address) {
        this.id = id;
        this.client = client;
        this.date = date;
        this.address = address;
    }

    public Order(String client, String date, String address) {
        this.client = client;
        this.date = date;
        this.address = address;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setClient(String client) {
        this.client = client;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getId() {
        return id;
    }

    public String getClient() {
        return client;
    }

    public String getDate() {
        return date;
    }

    public String getAddress() {
        return address;
    }

    @Override
    public String toString() {
        return "\nOrder{" +
                "id=" + id +
                ", client='" + client + '\'' +
                ", date=" + date +
                ", address='" + address + '\'' +
                "}";
    }
}
