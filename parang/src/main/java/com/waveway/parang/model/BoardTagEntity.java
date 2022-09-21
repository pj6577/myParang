package com.waveway.parang.model;

import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Arrays;
import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "tag")
public class BoardTagEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tag_id")
private Long tagId;

    @Column(name = "tag_uuid")
    private String boardTagId;

    @Column(name = "tag_content",length = 255,nullable = true)
    private String  boardTag;

//    public List<String> tagSplit() {
//        return Arrays.asList(boardTag.split(","));
//    }
}
