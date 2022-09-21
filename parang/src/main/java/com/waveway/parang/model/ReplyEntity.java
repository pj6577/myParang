package com.waveway.parang.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "reply")
public class ReplyEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reply_id",length = 255)
    private Long replyId;

    @Column(name = "board_id",length = 255,nullable = false)
    private Long boardId;

    @Column(name = "reply_content",length = 255,nullable = false)
    private String replyContent;

    @Column(name = "reply_writer_id",length = 255,nullable = false)
    private Long replyWriterId;

    @Column(name = "reply_likes",length = 255,nullable = true)
    private String replyLikes;

    @Column(name = "reply_hates",length = 255,nullable = true)
    private String replyHates;

    @Column(name = "reply_updated_time")
    private Calendar replyUpdatedTime;


}
