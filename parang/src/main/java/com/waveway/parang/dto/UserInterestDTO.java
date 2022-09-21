package com.waveway.parang.dto;

import com.waveway.parang.model.UserInterestEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data


public class UserInterestDTO {
    private Long userId;
    private Long fishingFloatId;
    private Long fishingHookId;
    private Long fishingSinkerId;
    private Long fishingLineId;
    private Long fishingCategoryId;
    private Long areaId;

    public UserInterestDTO(final UserInterestEntity entity) {
        this.userId = entity.getUserId();
        this.fishingFloatId = entity.getFishingFloatId();
        this.fishingHookId = entity.getFishingHookId();
        this.fishingSinkerId = entity.getFishingSinkerId();
        this.fishingLineId = entity.getFishingLineId();
        this.fishingCategoryId = entity.getFishingCategoryId();
        this.areaId = entity.getAreaId();


    }


    public static UserInterestEntity toEntity(final UserInterestDTO dto) {
        return UserInterestEntity.builder()
                .userId(dto.getUserId())
                .fishingFloatId(dto.getFishingFloatId())
                .fishingHookId(dto.getFishingHookId())
                .fishingSinkerId(dto.getFishingSinkerId())
                .fishingLineId(dto.getFishingLineId())
                .fishingCategoryId(dto.getFishingCategoryId())
                .areaId(dto.getAreaId())
                .build();
    }
}
