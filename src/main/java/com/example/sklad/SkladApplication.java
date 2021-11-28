package com.example.sklad;

import com.example.sklad.entity.Order;
import com.example.sklad.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;
import java.util.List;

//This single annotation is equivalent to using @Configuration,
//@EnableAutoConfiguration, and @ComponentScan.
@SpringBootApplication
public class SkladApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(SkladApplication.class, args);
	}

    @Autowired
    OrderRepository orderRepository;

    @Override
    public void run(String... args) throws Exception {
        Order client1 = new Order("Иванов И.И.", myDate.now(), "Ростов-на-Дону, ул. Садовая, 1");
        Order client2 = new Order("Петров П.П.", myDate.now(), "Ростов-на-Дону, ул. Московская, 1");
        Order client3 = new Order("Сидоров С.С.", myDate.now(), "Ростов-на-Дону, ул. Береговая, 1");
        List<Order> clients = Arrays.asList(client1,client2,client3);
        orderRepository.saveAll(clients);
        System.out.println("<<<<<<" + orderRepository.findAll());

    }
}
