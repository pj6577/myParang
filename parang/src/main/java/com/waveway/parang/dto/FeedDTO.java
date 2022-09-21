package com.waveway.parang.dto;

import com.waveway.parang.model.FeedEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

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
    private String boardWriterNickName;
    private String tagIdentifier;

    public FeedDTO(final FeedEntity boardEntity) {
        this.boardTitle = boardEntity.getBoardTitle();
        this.boardWriterNickName = boardEntity.getBoardWriterNickName();
        this.boardContent = boardEntity.getBoardContent();
        this.boardWriterId = boardEntity.getBoardWriterId();
        this.boardLikes = boardEntity.getBoardLikes();
        this.boardHates = boardEntity.getBoardHates();
        this.boardImg = boardEntity.getBoardImg();
        this.tagIdentifier = boardEntity.getTagIdentifier();
    }


    public static FeedEntity toEntity(final FeedDTO feedDTO) {
        return FeedEntity.builder()
                .boardTitle(feedDTO.getBoardTitle())
                .boardWriterNickName(feedDTO.getBoardWriterNickName())
                .boardContent(feedDTO.getBoardContent())
                .boardWriterId(feedDTO.boardWriterId)
                .boardLikes(feedDTO.getBoardLikes())
                .boardHates(feedDTO.getBoardHates())
                .boardImg(feedDTO.getBoardImg())
                .tagIdentifier(feedDTO.getTagIdentifier())
                .build();
    }
}
