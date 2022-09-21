package com.waveway.parang.model;

import com.waveway.parang.dto.FeedDTO;
import com.waveway.parang.dto.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Calendar;
import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "board")
public class FeedEntity extends BaseTimeEntity  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_id")
    private Long boardId;

    @Column(name = "board_title",length = 255,nullable = true)
    private String boardTitle;

    @Column(name = "board_content",length = 255,nullable = true)
    private String boardContent;

    @Column(name = "board_writer_id",nullable = true)
    private Long boardWriterId;

    @Column(name = "board_writer_nick_name", nullable = true)
    private String boardWriterNickName;

    @Column(name = "board_likes",length = 255,nullable = true)
    private String boardLikes;

    @Column(name = "board_hates",length = 255,nullable = true)
    private String boardHates;

    @Column(name = "board_img",length = 255,nullable = true)
    private String boardImg;
    @Column(name="board_tag_uuid", length = 255,nullable = true)
    private String tagIdentifier;

    public void updateFeed(FeedDTO feedDTO){
        this.boardTitle = feedDTO.getBoardTitle();
        this.boardContent = feedDTO.getBoardContent();
    }



}