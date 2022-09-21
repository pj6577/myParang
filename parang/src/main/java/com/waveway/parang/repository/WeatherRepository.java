package com.waveway.parang.repository;


import com.waveway.parang.model.WeatherEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface WeatherRepository extends JpaRepository<WeatherEntity, Long> {

    @Transactional
    @Modifying
    @Query(value="truncate weather", nativeQuery = true)
    void truncateWeatherTable();

    List<WeatherEntity> findByHarborNameAndFcstDate(String harborName, String fcstDate);
}
