package com.waveway.parang.controller.feed;


import com.waveway.parang.model.FeedEntity;
import com.waveway.parang.service.feed.FeedService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/feedAll")
public class FeedController {

    @Autowired
    private FeedService boardService;


    /** 
     * 게시물 불러오기
     * 박재현
     * */
    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<FeedEntity> getAllBoard(){
        return boardService.getAllBoard();
    }


//    @RequestMapping(value = "/writeboard", method = RequestMethod.POST)
//    public List<BoardEntity> writeBoard(){}
}
