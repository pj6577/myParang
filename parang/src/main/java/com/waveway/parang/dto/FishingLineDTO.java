package com.waveway.parang.dto;

import com.waveway.parang.model.FishingLineEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data


public class FishingLineDTO {
    private Long fishingLineId;
    private String fishingLineLength;
    private Long fishingCategoryId;

    public FishingLineDTO(final FishingLineEntity entity) {
        this.fishingLineId = entity.getFishingLineId();
        this.fishingLineLength = entity.getFishingLineLength();
        this.fishingCategoryId=entity.getFishingCategoryId();


    }


    public static FishingLineEntity toEntity(final FishingLineDTO dto) {
        return FishingLineEntity.builder()
                .fishingLineId(dto.getFishingLineId())
                .fishingLineLength(dto.getFishingLineLength())
                .fishingCategoryId(dto.getFishingCategoryId())

                .build();
    }
}