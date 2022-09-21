package com.waveway.parang.service.feed;

import com.waveway.parang.model.BoardTagEntity;
import com.waveway.parang.repository.TagRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class TagService {

    @Autowired
    private TagRepository tagRepository;

    public BoardTagEntity create(BoardTagEntity boardTagEntity){
        System.out.println("tagService working!!!");
        try{
            return tagRepository.save(boardTagEntity);
        }catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }
    public List<BoardTagEntity> getAllTag(){
        return tagRepository.findAll();
    }

}