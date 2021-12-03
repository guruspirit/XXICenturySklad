package com.example.sklad;

import com.example.sklad.jpa.GoodsRepository;
import com.example.sklad.jpa.PersonRepository;
import com.example.sklad.service.GoodsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//This single annotation is equivalent to using @Configuration,
//@EnableAutoConfiguration, and @ComponentScan.
@SpringBootApplication
public class Main implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
	}

    @Autowired
    PersonRepository personRepository;
    @Autowired
    GoodsRepository goodsRepository;

    @Override
    public void run(String... args) throws Exception {
//        Order client1 = new Order("Иванов И.И.", myDate.now(), "Ростов-на-Дону, ул. Садовая, 1");
//        Order client2 = new Order("Петров П.П.", myDate.now(), "Ростов-на-Дону, ул. Московская, 1");
//        Order client3 = new Order("Сидоров С.С.", myDate.now(), "Ростов-на-Дону, ул. Береговая, 1");
//        List<Order> clients = Arrays.asList(client1,client2,client3);
//        personRepository.saveAll(clients);
//        System.out.println("<<<<<<" + personRepository.findAll());
//        System.out.println("result: " + personRepository.findByClient("Иванов И.И."));
//        Goods goods = new Goods("Картофель", 50.0);
//        goodsRepository.save(goods);
        System.out.println("RESULT " + goodsRepository.findOneById(2));

    }
}
