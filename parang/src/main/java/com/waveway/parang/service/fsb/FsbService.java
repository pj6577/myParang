package com.waveway.parang.service.fsb;

import com.waveway.parang.model.FsbEntity;
import com.waveway.parang.repository.FsbRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class FsbService {

    @Autowired
    private FsbRepository repository;

    public List<FsbEntity> retrieve(final String shpmHangNm){
        System.out.println("fsb service retrieve hi");
        return repository.findByShpmHangNm(shpmHangNm);
    }
}
