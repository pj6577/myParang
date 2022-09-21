package com.waveway.parang.dto;

import com.waveway.parang.model.ReplyEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Calendar;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data


public class ReplyDTO {
    private Long replyId;
    private String replyContent;
    private Long replyWriterId;
    private Long boardId;
    private String replyHates;
    private String replyLikes;
    private Calendar replyUpdatedTime;

    public ReplyDTO(final ReplyEntity entity) {
        this.replyId = entity.getReplyId();
        this.replyContent = entity.getReplyContent();
        this.replyWriterId = entity.getReplyWriterId();
        this.boardId = entity.getBoardId();
        this.replyHates = entity.getReplyHates();
        this.replyLikes = entity.getReplyLikes();
        this.replyUpdatedTime = entity.getReplyUpdatedTime();

    }


    public static ReplyEntity toEntity(final ReplyDTO dto) {
        return ReplyEntity.builder()
                .replyId(dto.getReplyId())
                .replyContent(dto.getReplyContent())
                .replyWriterId(dto.getReplyWriterId())
                .boardId(dto.getBoardId())
                .replyHates(dto.getReplyHates())
                .replyLikes(dto.getReplyLikes())
                .replyUpdatedTime(dto.getReplyUpdatedTime())
                .build();
    }
}
