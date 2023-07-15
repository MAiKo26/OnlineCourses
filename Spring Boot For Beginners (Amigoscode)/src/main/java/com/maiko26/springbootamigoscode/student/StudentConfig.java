package com.maiko26.springbootamigoscode.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class StudentConfig {
    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository) {
        return args -> {
            Student mariam = new Student(
                    "Mariam",
                    LocalDate.of(2000, Month.JANUARY, 5),
                    "email@com");


            Student tarek = new Student(
                    "tarek",
                    LocalDate.of(1964, Month.JANUARY, 5),
                    "tarek@com");

            repository.saveAll(List.of(tarek, mariam));

        };
    }

}

