package com.example.fishingspotdb;

import com.example.fishingspotdb.controller.FishingSpotDBController;
import com.example.fishingspotdb.persistence.FishingSpotDBRepository;
import com.example.fishingspotdb.service.FishingSpotDBService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import static com.example.fishingspotdb.HttpConnection.getJsonArray;


@SpringBootApplication
public class FishingSpotDbApplication {
    public static void main(String[] args) {
        SpringApplication.run(FishingSpotDbApplication.class, args);

    }

}
