package com.waveway.parang.controller.weather;

import com.waveway.parang.dto.ResponseDTO;
import com.waveway.parang.dto.WeatherDTO;
import com.waveway.parang.model.WeatherEntity;
import com.waveway.parang.service.weather.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/weather")
public class WeatherLoadController {

    @Autowired
    private WeatherService weatherService;

    @PostMapping(value = "/retrieve")
    public ResponseEntity<?> retrieveWeather(@RequestBody WeatherEntity weatherEntity){
        System.out.println("retrieveWeather working!!!!");
        System.out.println(weatherEntity.getFcstDate());
        List<WeatherEntity> weathers = weatherService.retrieve(weatherEntity.getHarborName(), weatherEntity.getFcstDate());
        List<WeatherDTO> dtos = weathers.stream().map(WeatherDTO::new).collect(Collectors.toList());
        System.out.println("" + weathers);
        ResponseDTO<WeatherDTO> response = ResponseDTO.<WeatherDTO>builder().resList(dtos).build();

        return ResponseEntity.ok().body(response);
    }




}
