package com.waveway.parang.model;

import lombok.*;

import javax.persistence.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "area")
public class AreaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "area_id")
    private Long areaId;

    @Column(name = "area_name",length = 255,nullable = false)
    private String areaName;

    @Column(name = "area_address",length = 255,nullable = false)
    private String areaAddress;

    @Column(name = "area_code",length = 255,nullable = false)
    private String areaCode;

}
