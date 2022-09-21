package com.waveway.parang.controller.feed;

import com.waveway.parang.dto.TagDTO;
import com.waveway.parang.model.BoardTagEntity;
import com.waveway.parang.service.feed.TagService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Slf4j
@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/tag")
public class TagController {

    @Autowired
    private TagService tagService;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public void createTag(@AuthenticationPrincipal Long userId, @RequestBody TagDTO tagDTO){
        System.out.println("무적권"+tagDTO.getTagIdentifier());
        String tag="";
        for(int i=0;i<tagDTO.getBoardTag().size();i++){
            tag = (String) tagDTO.getBoardTag().get(i);
            BoardTagEntity boardTagEntity = BoardTagEntity.builder()
                    .boardTag(tag)
                    .boardTagId(tagDTO.getTagIdentifier())
                    .build();
            System.out.println("\n\n\n\nentity"+boardTagEntity+"\n\n\n\n\n");
            tagService.create(boardTagEntity);
        }
    }

    @RequestMapping(value = "/tagAll", method = RequestMethod.GET)
    public List<BoardTagEntity> getAllTag(){
        return tagService.getAllTag();
    }


}