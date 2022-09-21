package com.waveway.parang.dto;

import com.waveway.parang.model.BoardTagEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.ArrayList;
import java.util.List;


@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TagDTO {
    private String tagIdentifier;
    private List<String> boardTag;

    public static BoardTagEntity toEntity(final TagDTO tagDTO) {
        return BoardTagEntity.builder()
                .boardTagId(tagDTO.getTagIdentifier())
                .build();
    }
}
