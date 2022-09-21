package com.waveway.parang.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Calendar;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "fishingtaboo")
public class FishingTabooEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="species", length=45, nullable = true)
    private String species;

    @Column(name="prohibition_startdate")
    private Calendar prohibitionStartDate;

    @Column(name="prohibition_enddate")
    private Calendar prohibitionEndDate;

    @Column(name="prohibition_body")
    private Long prohibitionBody;
}
