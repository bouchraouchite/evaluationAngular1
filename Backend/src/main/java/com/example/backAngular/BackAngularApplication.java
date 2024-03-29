package com.example.backAngular;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class BackAngularApplication implements WebMvcConfigurer {
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**") // Allow CORS for all endpoints
				.allowedOrigins("*") // Allow requests from any origin
				.allowedMethods("GET", "POST", "PUT", "DELETE") // Allow specific HTTP methods
				.allowedHeaders("*"); // Allow all headers
	}

	public static void main(String[] args) {
		SpringApplication.run(BackAngularApplication.class, args);
	}

}
