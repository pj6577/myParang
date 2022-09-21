package com.waveway.parang.service.taboo;

import com.waveway.parang.model.FishingTabooEntity;
import com.waveway.parang.repository.TabooRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Slf4j
@Service
public class TabooService {

    @Autowired
    private TabooRepository repository;

    public List<FishingTabooEntity> retrieve(final Date prohibitionStartDate){
        System.out.println("taboo service retrieve hi");
        System.out.println(prohibitionStartDate);
        return repository.findDate(prohibitionStartDate);
    }

}
