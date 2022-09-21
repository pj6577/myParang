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
@Table(name = "userinterest")
public class UserInterestEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_interest_id")
    private Long userInterestId;

    @Column(name = "user_id",length = 255,nullable = false)
    private Long userId;

    @Column(name = "fishing_float_id",length = 255,nullable = false)
    private Long fishingFloatId;

    @Column(name = "fishing_hook_id",length = 255,nullable = false)
    private Long fishingHookId;

    @Column(name = "fishing_sinker_id",length = 255,nullable = false)
    private Long fishingSinkerId;

    @Column(name = "fishing_line_id",length = 255,nullable = false)
    private Long fishingLineId;

    @Column(name = "fishing_category_id",length = 255,nullable = false)
    private Long fishingCategoryId;

    @Column(name = "area_id",length = 255,nullable = false)
    private Long areaId;
}
