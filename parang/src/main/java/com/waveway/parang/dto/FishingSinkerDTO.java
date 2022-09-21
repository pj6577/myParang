package com.waveway.parang.dto;

import com.waveway.parang.model.FishingSinkerEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data


public class FishingSinkerDTO {
    private Long fishingSinkerId;
    private String fishingSinkerWeight;
    private Long fishingCategoryId;

    public FishingSinkerDTO(final FishingSinkerEntity entity) {
        this.fishingSinkerId = entity.getFishingSinkerId();
        this.fishingSinkerWeight = entity.getFishingSinkerWeight();
        this.fishingCategoryId = entity.getFishingCategoryId();




    }


    public static FishingSinkerEntity toEntity(final FishingSinkerDTO dto) {
        return FishingSinkerEntity.builder()
                .fishingSinkerId(dto.getFishingSinkerId())
                .fishingSinkerWeight(dto.getFishingSinkerWeight())
                .fishingCategoryId(dto.getFishingCategoryId())
                .build();
    }
}
