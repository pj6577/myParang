package com.waveway.parang.dto;


import com.waveway.parang.model.FsbEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data

public class FsbDTO {
    private Long id;

    //보트넘버
    private String fsboNo;
    //배이름
    private String fsboNm;
    //배 항구 이름
    private String shpmHangNm;
    //최대 직원탑승수
    private String maxShcrNum;
    //선박최대승선
    private String maxPsrNum;

    public FsbDTO(final FsbEntity entity){
        this.id = entity.getId();
        this.fsboNo = entity.getFsboNo();
        this.fsboNm = entity.getFsboNm();
        this.shpmHangNm = entity.getShpmHangNm();
        this.maxShcrNum = entity.getMaxShcrNum();
        this.maxPsrNum = entity.getMaxPsrNum();
    }

}
