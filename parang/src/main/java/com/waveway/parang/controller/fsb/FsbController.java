package com.waveway.parang.controller.fsb;

import com.waveway.parang.dto.FsbDTO;
import com.waveway.parang.dto.ResponseDTO;
import com.waveway.parang.model.FsbEntity;
import com.waveway.parang.service.fsb.FsbService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/boat")
public class FsbController {

    @Autowired
    private FsbService fsbService;

    @PostMapping(value="/retrieve")
    public ResponseEntity<?> retrieveFsb(@RequestBody FsbEntity fsbEntity){
        System.out.println("retrieveFsb working!!!");
        List<FsbEntity> fsbs = fsbService.retrieve(fsbEntity.getShpmHangNm());
        List<FsbDTO> dtos = fsbs.stream().map(FsbDTO::new).collect(Collectors.toList());
        System.out.println("" + fsbs);
        ResponseDTO<FsbDTO> response = ResponseDTO.<FsbDTO>builder().resList(dtos).build();

        return ResponseEntity.ok().body(response);
    }
}
