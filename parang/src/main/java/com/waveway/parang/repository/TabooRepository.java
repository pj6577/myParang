package com.waveway.parang.repository;

import com.waveway.parang.model.FishingTabooEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface TabooRepository extends JpaRepository<FishingTabooEntity,Long> {

    @Query(value = "Select * From parang.fishingtaboo WHERE :prohibitionStartDate >= prohibition_startdate and :prohibitionStartDate <= prohibition_enddate",nativeQuery = true)
    List<FishingTabooEntity> findDate(@Param("prohibitionStartDate") Date prohibitionStartDate);
}