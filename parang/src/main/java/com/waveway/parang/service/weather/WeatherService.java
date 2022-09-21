package com.waveway.parang.service.weather;

import com.waveway.parang.model.WeatherEntity;
import com.waveway.parang.repository.WeatherRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class WeatherService {
    @Autowired
    private WeatherRepository repository;

    public void create(final WeatherEntity weatherEntity){
        System.out.println("weather service hi!!");
        repository.save(weatherEntity);
        log.info("weatherEntity Id : " + weatherEntity.getWeatherId() + " is saved!!");
    }
    public void truncate(){
        repository.truncateWeatherTable();
    }


    public List<WeatherEntity> retrieve(final String harborName, final String fcstDate){
        System.out.println("weather service retrieve hi!!");
        return repository.findByHarborNameAndFcstDate(harborName, fcstDate);
    }
}
