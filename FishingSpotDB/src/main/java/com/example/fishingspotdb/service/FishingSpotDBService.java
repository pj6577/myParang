package com.example.fishingspotdb.service;

import com.example.fishingspotdb.model.FsbEntity;
import com.example.fishingspotdb.persistence.FishingSpotDBRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class FishingSpotDBService {
    @Autowired
    private FishingSpotDBRepository repository;

    public void create(final FsbEntity fsbEntity){
        System.out.println("service hi");
        repository.save(fsbEntity);
        log.info("Entity Id : {} is saved", fsbEntity.getId());
      }
}
