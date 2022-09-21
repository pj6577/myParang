package com.waveway.parang.dto;

import com.waveway.parang.model.AreaEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class AreaDTO {
    private Long areaId;
    private String areaName;
    private String areaAddress;
    private String areaCode;

    public AreaDTO(final AreaEntity areaEntity) {
        this.areaId = areaEntity.getAreaId();
        this.areaName = areaEntity.getAreaName();
        this.areaAddress = areaEntity.getAreaAddress();
        this.areaCode = areaEntity.getAreaCode();
    }


    public static AreaEntity toEntity(final AreaDTO dto) {
        return AreaEntity.builder()
                .areaId(dto.getAreaId())
                .areaName(dto.getAreaName())
                .areaAddress(dto.getAreaAddress())
                .areaCode(dto.getAreaCode())
                .build();
    }
}
