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
@Table(name = "fishinghook")
public class FishingHookEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="fishing_hook_id")
    private Long fishingHookId;

    @Column(name = "fishing_hook_size",length = 255,nullable = false)
    private String fishingHookSize;

    @Column(name = "fishing_category_id",length = 255,nullable = false)
    private Long fishingCategoryId;


    @Column(name = "fishing_hook_brandname")
    private String fishingHookBrandName;

    @JoinColumn(name = "fishing_category_name")
    private String fishingCategoryName;


}
