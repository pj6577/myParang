package com.waveway.parang.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "weather")
public class WeatherEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "weather_id")
    private Long weatherId;

    @Column(name = "fcst_date", length = 100)
    private String fcstDate;
    @Column(name = "fcst_time", length = 100)
    private String fcstTime;
    @Column(name = "fcst_pop", length = 100)
    private String fcstPop;
    @Column(name = "fcst_pcp", length = 100)
    private String fcstPcp;
    @Column(name = "fcst_vec", length = 100)
    private String fcstVec;
    @Column(name = "fcst_reh", length = 100)
    private String fcstReh;
    @Column(name = "fcst_wav", length = 100)
    private String fcstWav;
    @Column(name = "fcst_sky", length = 100)
    private String fcstSky;
    @Column(name = "fcst_pty", length = 100)
    private String fcstPty;
    @Column(name = "fcst_harbor_name", length = 100)
    private String harborName;
    @Column(name = "fcst_tmp", length = 100)
    private String fcstTmp;




}
