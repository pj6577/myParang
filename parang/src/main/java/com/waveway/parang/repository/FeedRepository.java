package com.waveway.parang.repository;

import com.waveway.parang.model.FeedEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedRepository extends JpaRepository<FeedEntity, Long> {
    FeedEntity findByBoardId(Long boardId);
}