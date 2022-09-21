package com.waveway.parang.dto;

import com.waveway.parang.model.ProbabilityEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProbabilityDTO {
    private long id;
    private String timeType;
    private String fishName;
    private String lon;
    private String waterTemp;
    private String airTemp;
    private String tideTimeScore;
    private String totalScore;
    private String pbbName;
    private String pbbDate;
    private String waveHeight;
    private String lat;

    public ProbabilityDTO(final ProbabilityEntity entity){
        this.id = entity.getId();
        this.timeType = entity.getTimeType();
        this.fishName = entity.getFishName();
        this.lon = entity.getLon();
        this.waterTemp = entity.getWaterTemp();
        this.airTemp = entity.getAirTemp();
        this.tideTimeScore = entity.getTideTimeScore();
        this.totalScore = entity.getTotalScore();
        this.pbbName = entity.getPbbName();
        this.pbbDate = entity.getPbbDate();
        this.waveHeight = entity.getWaveHeight();
        this.lat = entity.getLat();
    }

    public static ProbabilityEntity toEntity(final ProbabilityDTO dto){
        return ProbabilityEntity.builder()
                .id(dto.getId())
                .timeType(dto.getTimeType())
                .fishName(dto.getFishName())
                .lon(dto.getLon())
                .waterTemp(dto.getWaterTemp())
                .tideTimeScore(dto.getTideTimeScore())
                .totalScore(dto.getTotalScore())
                .pbbName(dto.getPbbName())
                .pbbDate(dto.getPbbDate())
                .waveHeight(dto.getWaveHeight())
                .lat(dto.getLat())
                .build();
    }



}
