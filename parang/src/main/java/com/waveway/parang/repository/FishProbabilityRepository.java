package com.waveway.parang.repository;

import com.waveway.parang.model.FishingTabooEntity;
import com.waveway.parang.model.ProbabilityEntity;
import com.waveway.parang.model.WeatherEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

public interface FishProbabilityRepository extends JpaRepository<ProbabilityEntity, Long> {
    @Transactional
    @Modifying
    @Query(value="truncate probability", nativeQuery = true)
    void truncateProbabilityTable();

    @Query(value = "SELECT * FROM parang.probability group by name", nativeQuery = true)
    List<ProbabilityEntity> findLatLon();

    List<ProbabilityEntity> findByPbbNameAndPbbDate(String pbbName,String pbbDate);
}
