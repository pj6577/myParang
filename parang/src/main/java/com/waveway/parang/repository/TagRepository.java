package com.waveway.parang.repository;

import com.waveway.parang.model.BoardTagEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository  extends JpaRepository<BoardTagEntity,String> {
}
