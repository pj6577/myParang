package com.waveway.parang.repository;

import com.waveway.parang.model.FsbEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FsbRepository extends JpaRepository<FsbEntity,Long> {
    List<FsbEntity> findByShpmHangNm(String shpmHangNm);
}
