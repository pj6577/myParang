package com.waveway.parang.repository;

import com.waveway.parang.model.FsbEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository  extends JpaRepository<FsbEntity,String> {
}
