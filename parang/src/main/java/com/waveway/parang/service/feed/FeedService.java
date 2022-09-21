package com.waveway.parang.service.feed;

import com.waveway.parang.model.FeedEntity;
import com.waveway.parang.repository.FeedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedService {

    @Autowired
    private FeedRepository boardRepository;

    public List<FeedEntity> getAllBoard(){
        return boardRepository.findAll();
    }

}
