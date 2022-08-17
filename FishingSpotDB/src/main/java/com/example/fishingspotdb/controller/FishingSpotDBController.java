package com.example.fishingspotdb.controller;

import com.example.fishingspotdb.HttpConnection;
import com.example.fishingspotdb.model.FsbEntity;
import com.example.fishingspotdb.persistence.FishingSpotDBRepository;
import com.example.fishingspotdb.service.FishingSpotDBService;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.example.fishingspotdb.HttpConnection.getJsonArray;


@RestController
@RequestMapping("/api")
public class FishingSpotDBController {
    @Autowired
    private FishingSpotDBService service;

    @GetMapping
    public int createFishingSpotDB(){
        try {
            JSONArray item = getJsonArray();
            System.out.println("FishingSpotDBController"+item);
                for(int i=0;i<item.length();i++){
                    JSONObject obj = item.getJSONObject(i);
                    System.out.println("obj" + obj);
                    String fsboNo = obj.getString("fsboNo");
                    String fsboNm =obj.getString("fsboNm");
                    String shpmHangNm = obj.getString("shpmHangNm");
                    String maxShcrNum = obj.getString("maxShcrNum");
                    String maxPsrNum = obj.getString("maxPsrNum");
                    System.out.println("fsnoNo " + fsboNo );
                    FsbEntity fsb = FsbEntity.builder()
                            .fsboNo(fsboNo)
                            .fsboNm(fsboNm)
                            .shpmHangNm(shpmHangNm)
                            .maxShcrNum(maxShcrNum)
                            .maxPsrNum(maxPsrNum)
                            .build();

                    System.out.println("fsb " + fsb);
                    service.create(fsb);
                }

            return 1;
        }
        catch (Exception e){
            e.printStackTrace();
            return 0;
        }



    }
}
