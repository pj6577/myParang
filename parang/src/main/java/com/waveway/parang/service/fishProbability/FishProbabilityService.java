package com.waveway.parang.service.fishProbability;


import com.waveway.parang.model.FishingTabooEntity;
import com.waveway.parang.model.ProbabilityEntity;
import com.waveway.parang.model.WeatherEntity;
import com.waveway.parang.repository.FishProbabilityRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Slf4j
@Service
public class FishProbabilityService {
    @Autowired
    private FishProbabilityRepository fishProbabilityRepository;

    public void truncate(){
        fishProbabilityRepository.truncateProbabilityTable();
    }

    public void create(final ProbabilityEntity fishProbabilityEntity){
        System.out.println("probability service hi!!");
        fishProbabilityRepository.save(fishProbabilityEntity);
        log.info("");
    }

    public List<ProbabilityEntity> retrieve(){
        System.out.println("PBB service retrieve hi");

        return fishProbabilityRepository.findLatLon();
    }
    public List<ProbabilityEntity> retrieveFishProbability(final String name, final String date){
        System.out.println("probability service hi!!!!");
        return fishProbabilityRepository.findByPbbNameAndPbbDate(name,date);
    }
}
