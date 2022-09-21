package com.waveway.parang.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Calendar;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "board")
public class FeedEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_id")
    private Long boardId;

    @Column(name = "board_title",length = 255,nullable = false)
    private String boardTitle;

    @Column(name = "board_content",length = 255,nullable = false)
    private String boardContent;

    @Column(name = "board_category",length = 255,nullable = true)
    private String boardCategory;

    @Column(name = "board_writer_id",nullable = false)
    private Long boardWriterId;

    @Column(name = "board_likes",length = 255,nullable = true)
    private String boardLikes;

    @Column(name = "board_hates",length = 255,nullable = true)
    private String boardHates;

    @Column(name = "board_updated_time")
    private Calendar boardUpdatedTime;

    @Column(name = "board_img",length = 255,nullable = false)
    private String boardImg;

}
