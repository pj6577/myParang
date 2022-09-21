package com.waveway.parang.dto;

import com.waveway.parang.model.FishingFloatEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class FishingFloatDTO {
    private Long fishingFloatId;
    private String fishingFloatAppearance;
    private String fishingFloatBuoyancy;
    private Long fishingCategoryId;

    public FishingFloatDTO(final FishingFloatDTO fishingFloatEntity) {
        this.fishingFloatId = fishingFloatEntity.getFishingFloatId();
        this.fishingFloatAppearance = fishingFloatEntity.getFishingFloatAppearance();
        this.fishingFloatBuoyancy = fishingFloatEntity.getFishingFloatBuoyancy();
        this.fishingCategoryId = fishingFloatEntity.getFishingCategoryId();


    }

    public static FishingFloatEntity toEntity(final FishingFloatDTO dto) {
        return FishingFloatEntity.builder()
                .fishingFloatId(dto.getFishingFloatId())
                .fishingFloatAppearance(dto.getFishingFloatAppearance())
                .fishingFloatBuoyancy(dto.getFishingFloatBuoyancy())
                .fishingCategoryId(dto.getFishingCategoryId())

                .build();
    }
}
