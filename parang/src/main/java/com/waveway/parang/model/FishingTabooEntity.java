package com.waveway.parang.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "fishingtaboo")
public class FishingTabooEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="taboo_id")
    private Long tabooId;

    @Column(name="species", length=45, nullable = true)
    private String species;

    @Column(name="prohibition_startdate")
    @Temporal(TemporalType.DATE)
    private Date prohibitionStartDate;

    @Temporal(TemporalType.DATE)
    @Column(name="prohibition_enddate")
    private Date prohibitionEndDate;

    @Column(name="prohibition_body")
    private Long prohibitionBody;

    @Column(name="species_image_src",length = 255)
    private String speciesImageSrc;
}
