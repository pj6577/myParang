package com.example.fishingspotdb.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "fsb")
public class FsbEntity {
    @Id
    @GeneratedValue(generator = "uuid2") // ID 자동생성
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    private String id;

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

    public FsbEntity(String a, String b, String c, String d, String e){
        this.fsboNo = a;
        this.fsboNm = b;
        this.shpmHangNm = c;
        this.maxShcrNum = d;
        this.maxPsrNum = e;
    }
}