package com.waveway.parang.controller.taboo;

import com.waveway.parang.dto.FishingTabooDTO;
import com.waveway.parang.dto.ResponseDTO;
import com.waveway.parang.model.FishingTabooEntity;
import com.waveway.parang.model.WeatherEntity;
import com.waveway.parang.service.taboo.TabooService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/taboo")
public class TabooController {

    @Autowired
    private TabooService tabooService;

    @PostMapping(value="/retrieve")
    public ResponseEntity<?> retrieveTaboo(@RequestBody FishingTabooEntity fishingTabooEntity){
        System.out.println("retrieveTabb working!!!");
        System.out.println(fishingTabooEntity.getProhibitionStartDate());
        List<FishingTabooEntity> taboo = tabooService.retrieve(fishingTabooEntity.getProhibitionStartDate());
        List<FishingTabooDTO> dtos = taboo.stream().map(FishingTabooDTO::new).collect(Collectors.toList());
        System.out.println(""+taboo);
        ResponseDTO<FishingTabooDTO> response = ResponseDTO.<FishingTabooDTO>builder().resList(dtos).build();

        return ResponseEntity.ok().body(response);
    }

}
