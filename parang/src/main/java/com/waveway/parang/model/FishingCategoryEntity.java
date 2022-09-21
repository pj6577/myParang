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
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "fishingcategory")
public class FishingCategoryEntity {

    @Column
    private Long id;

    @Id
    @Column(name = "fishing_category_name")
    private String fishingCategoryName;

}
