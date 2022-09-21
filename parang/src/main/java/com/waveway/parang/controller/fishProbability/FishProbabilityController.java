package com.waveway.parang.controller.fishProbability;

import com.waveway.parang.dto.ProbabilityDTO;
import com.waveway.parang.dto.ResponseDTO;
import com.waveway.parang.httpconnection.HttpConnection;
import com.waveway.parang.model.ProbabilityEntity;
import com.waveway.parang.service.fishProbability.FishProbabilityService;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping("/probability")
public class FishProbabilityController {
    @Autowired
    private FishProbabilityService fishProbabilityService;

    @Autowired
    private HttpConnection httpConnection;

//    @Scheduled(cron="* * 8 * * *")
    @GetMapping("/create")
    public void createFishProbabilityTable(){
        System.out.println("createFishProbability working!!!");
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter timeformatter = DateTimeFormatter.ofPattern("HH");

        String baseTime = now.format(timeformatter);
        //baseTime == "08" 원래 조건식
        if(true){
            fishProbabilityService.truncate();
            try{
                JSONArray item = httpConnection.getFishJsonArray();
                for(int i=0;i<item.length();i++){
                    JSONObject obj = item.getJSONObject(i);
                    ProbabilityEntity pbb = ProbabilityEntity.builder()
                            .timeType(obj.getString("time_type"))
                            .fishName(obj.getString("fish_name"))
                            .lon(obj.getString("lon"))
                            .waterTemp(obj.getString("water_temp"))
                            .airTemp(obj.getString("air_temp"))
                            .tideTimeScore(obj.getString("tide_time_score"))
                            .totalScore(obj.getString("total_score"))
                            .pbbName(obj.getString("name"))
                            .pbbDate(obj.getString("date"))
                            .waveHeight(obj.getString("wave_height"))
                            .lat(obj.getString("lat"))
                            .build();
                    log.info(String.valueOf(pbb));
                    fishProbabilityService.create(pbb);
                }
            }catch(Exception e){
                e.printStackTrace();
            }
        }
    }

    @GetMapping("/retrieve")
    public ResponseEntity<?> retrieveProbability(){
        System.out.println("retrieveProbability working!!!!");
        List<ProbabilityEntity> pbbList = fishProbabilityService.retrieve();
        System.out.println("pbbListh : sdfsdf   " + pbbList);
        List<ProbabilityDTO> dtos = pbbList.stream().map(ProbabilityDTO::new).collect(Collectors.toList());
        ResponseDTO<ProbabilityDTO> response = ResponseDTO.<ProbabilityDTO>builder().resList(dtos).build();

        return ResponseEntity.ok().body(response);
    }

    @PostMapping(value="/retrieveFishProbability")
    public ResponseEntity<?> retrieveFishProbability (@RequestBody ProbabilityEntity probabilityEntity){
        System.out.println("retrieveFishProbability");

        List<ProbabilityEntity> probabilitys = fishProbabilityService.retrieveFishProbability(probabilityEntity.getPbbName(),probabilityEntity.getPbbDate());
        List<ProbabilityDTO> dtos = probabilitys.stream().map(ProbabilityDTO::new).collect(Collectors.toList());

        ResponseDTO<ProbabilityDTO> response = ResponseDTO.<ProbabilityDTO>builder().resList(dtos).build();


        return ResponseEntity.ok().body(response);
    }
}
