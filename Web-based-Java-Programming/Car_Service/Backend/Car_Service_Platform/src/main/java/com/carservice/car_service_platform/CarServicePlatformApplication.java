package com.carservice.car_service_platform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication(scanBasePackages = "com.carservice")
@EnableJpaRepositories(basePackages = "com.carservice.dao")
@EntityScan(basePackages = "com.carservice.entity")
public class CarServicePlatformApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarServicePlatformApplication.class, args);
	}

}
