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
@Table(name = "fsb")
public class FsbEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "fsnoNo", length = 14)
    private String fsboNo;

    @Column(name = "fsboNm", length = 50)
    private String fsboNm;

    @Column(name = "shpmHangNm", length = 100)
    private String shpmHangNm;

    @Column(name = "maxShcrNum", length = 10)
    private String maxShcrNum;

    @Column(name = "maxPsrNum", length = 10)
    private String maxPsrNum;
}
