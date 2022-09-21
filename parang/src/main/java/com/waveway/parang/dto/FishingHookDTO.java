package com.waveway.parang.dto;

import com.waveway.parang.model.FishingHookEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data


public class FishingHookDTO {
    private Long fishingHookId;
    private String fishingHookSize;
    private Long fishingCategoryId;

    public FishingHookDTO(final FishingHookEntity entity) {
        this.fishingHookId = entity.getFishingHookId();
        this.fishingHookSize = entity.getFishingHookSize();
        this.fishingCategoryId=entity.getFishingCategoryId();


    }


    public static FishingHookEntity toEntity(final FishingHookDTO dto) {
        return FishingHookEntity.builder()
                .fishingHookSize(dto.getFishingHookSize())
                .fishingCategoryId(dto.getFishingCategoryId())
                .build();
    }
}
