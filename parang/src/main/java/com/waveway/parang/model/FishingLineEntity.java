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
@Table(name = "fishingline")
public class FishingLineEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fishing_line_id",length = 255)
    private Long fishingLineId;

    @Column(name = "fishing_line_length",length = 255,nullable = false)
    private String fishingLineLength;

    @Column(name = "fishing_category_id",length = 255,nullable = false)
    private Long fishingCategoryId;



}