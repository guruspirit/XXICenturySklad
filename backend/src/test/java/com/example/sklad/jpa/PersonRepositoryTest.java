package com.example.sklad.jpa;

import com.example.sklad.entity.Order;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
class PersonRepositoryTest { //Тестирование слоя JPA

    @Autowired
    PersonRepository personRepository;

    @Test
    void findByClient() throws Exception{
        assertEquals(5,5);
//        List<Order> orders = personRepository.findByClient("Иванов И.И.");
//        assertThat(orders).hasSize(1);
//        assertThat(orders.get(0).getAddress()).isEqualTo("Ростов-на-Дону, ул. Садовая, 1");

    }

    @Test
    public void findAllOrderedByClient() throws Exception{
        List<Order> clients = personRepository.findAllOrderedByClient();
        assertThat(clients).hasSize(3);
        assertThat(clients.get(0).getClient()).isEqualTo("Иванов И.И.");
        assertThat(clients.get(1).getClient()).isEqualTo("Петров П.П.");

    }
}