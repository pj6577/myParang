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
@Table(name = "probability")
public class ProbabilityEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "id")
    private Long id;
    @Column(name = "time_type",length = 100)
    private String timeType;
    @Column(name="fish_name")
    private String fishName;
    @Column(name = "lon",length = 100)
    private String lon;
    @Column(name = "water_temp",length = 100)
    private String waterTemp;
    @Column(name = "air_temp",length = 100)
    private String airTemp;
    @Column(name = "tide_time_score",length = 100)
    private String tideTimeScore;
    @Column(name = "total_score")
    private String totalScore;
    @Column(name = "name",length = 100)
    private String pbbName;
    @Column(name = "date",length = 100)
    private String pbbDate;
    @Column(name = "wave_height",length = 100)
    private String waveHeight;
    @Column(name = "lat",length = 100)
    private String lat;



}
