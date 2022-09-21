package com.waveway.parang.dto;


import com.waveway.parang.model.WeatherEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data

public class WeatherDTO {
    private Long weather_id;

    //예보일자
    private String fcst_date;
    //예보시각
    private String fcst_time;
    //강수확률
    private String fcst_pop;
    //1시간 강수량
    private String fcst_pcp;
    //풍량
    private String fcst_vec;
    //습도
    private String fcst_reh;
    //파고
    private String fcst_wav;
    //하늘상태
    private String fcst_sky;
    //강수형태
    private String fcst_pty;
    //항구이름
    private String fcst_harbor_name;
    //기온
    private String fcst_tmp;


    public WeatherDTO(final WeatherEntity entity){
        this.weather_id = entity.getWeatherId();
        this.fcst_date = entity.getFcstDate();
        this.fcst_time = entity.getFcstTime();
        this.fcst_pop = entity.getFcstPop();
        this.fcst_pcp = entity.getFcstPcp();
        this.fcst_vec = entity.getFcstVec();
        this.fcst_reh = entity.getFcstReh();
        this.fcst_wav = entity.getFcstWav();
        this.fcst_sky = entity.getFcstSky();
        this.fcst_pty = entity.getFcstPty();
        this.fcst_harbor_name = entity.getHarborName();
        this.fcst_tmp = entity.getFcstTmp();
    }

}
