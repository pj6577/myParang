package com.example.fishingspotdb.persistence;

import com.example.fishingspotdb.model.FsbEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FishingSpotDBRepository extends JpaRepository<FsbEntity, String> {

}
