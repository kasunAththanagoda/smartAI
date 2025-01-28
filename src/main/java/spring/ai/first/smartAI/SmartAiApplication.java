package spring.ai.first.smartAI;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SmartAiApplication {

	public static void main(String[] args) {
		SpringApplication.run(SmartAiApplication.class, args);
	}

}
