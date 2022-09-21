package com.waveway.parang.model;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;



@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Builder
@Table(name = "fishingfloat")
public class FishingFloatEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JoinColumn(name = "fishing_float_id")
    private Long fishingFloatId;

    @Column(name = "fishing_float_appearance",length = 255,nullable = false)
    private String fishingFloatAppearance;

    @Column(name = "fishing_float_buoyancy",length = 255,nullable = false)
    private String fishingFloatBuoyancy;

    @Column(name = "fishing_category_id",length = 255,nullable = false)
    private Long fishingCategoryId;

}
