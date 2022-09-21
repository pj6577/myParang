package com.waveway.parang.dto;

import com.waveway.parang.model.FeedEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data

public class FeedDTO {
    private Long boardId;
    private String boardTitle;
    private String boardContent;
    private String boardCategory;
    private Long boardWriterId;
    private String boardLikes;
    private String boardHates;
    private String boardImg;
    private Date boardUpdated;

    public FeedDTO(final FeedEntity boardEntity) {
        this.boardTitle = boardEntity.getBoardTitle();
        this.boardContent = boardEntity.getBoardContent();
        this.boardCategory = boardEntity.getBoardCategory();
        this.boardWriterId = boardEntity.getBoardWriterId();
        this.boardLikes = boardEntity.getBoardLikes();
        this.boardHates = boardEntity.getBoardHates();
        this.boardImg = boardEntity.getBoardImg();
    }


    public static FeedEntity toEntity(final FeedDTO dto) {
        return FeedEntity.builder()
                .boardTitle(dto.getBoardTitle())
                .boardContent(dto.getBoardContent())
                .boardCategory(dto.getBoardCategory())
                .boardWriterId(dto.getBoardWriterId())
                .boardLikes(dto.getBoardLikes())
                .boardHates(dto.getBoardHates())
                .boardImg(dto.getBoardImg())

                .build();
    }
}
