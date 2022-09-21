package com.waveway.parang.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Entity
@Table(name = "fishingsinker")
public class FishingSinkerEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="fishing_sinker_id")
    private Long fishingSinkerId;



    @Column(name = "fishing_sinker_weight",length = 255,nullable = false)
    private String fishingSinkerWeight;

    @Column(name="fishing_category_id",length = 255,nullable = false)
    private Long fishingCategoryId;
}
