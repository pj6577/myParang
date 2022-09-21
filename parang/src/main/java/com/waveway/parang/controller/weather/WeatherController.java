package com.waveway.parang.controller.weather;


import com.waveway.parang.model.WeatherEntity;
import com.waveway.parang.service.weather.WeatherService;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.DecimalFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import static com.waveway.parang.httpconnection.HttpConnection.getJsonArray;
@Slf4j
@RestController
@RequestMapping("/weather")
public class WeatherController {

    @Autowired
    private WeatherService weatherService;

    private String[] HARBOR = {"송정항", "우도항", "서귀포항", "오이도항", "삼길포항", "광리항", "아야진항", "강릉항"};
    private String[] LAT = {"35", "33", "33", "37", "37", "34", "38", "37"};
    private String[] LOT = {"129", "126", "126", "126", "126", "128", "128", "128"};

    @GetMapping("/create")
    public void createWeatherInfo(){
        System.out.println("createWeatherInfo working!!!");
        //요청할 날짜와 시간 / 3일간의 날짜 데이터 만들기
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter dateformatter = DateTimeFormatter.ofPattern("YYYYMMdd");
        DateTimeFormatter timeformatter = DateTimeFormatter.ofPattern("HH");
        DecimalFormat df = new DecimalFormat("0000");

        String today = now.format(dateformatter);
        int baseTime = Integer.parseInt(now.format(timeformatter));
        String tomorrow = now.plusDays(1).format(dateformatter);
        String twoDaysLater = now.plusDays(2).format(dateformatter);
        String threeDaysLater = now.plusDays(3).format(dateformatter);
        //잠시 true로 바꿈 (baseTime %3)==2
        if(baseTime%3==2) {
            weatherService.truncate();
            try {
                for (int i = 0; i < HARBOR.length; i++) {
                    System.out.println("weatherController hi ");
                    JSONArray item = getJsonArray(today, LAT[i], LOT[i], df.format((baseTime)*100));

                    System.out.println(item);
                    WeatherEntity weatherEntity = new WeatherEntity();

                    weatherEntity.setFcstTime(df.format((baseTime+1)*100));
                    for (int o = 0; o < item.length(); o++) {
                        JSONObject obj = item.getJSONObject(o);
                        if (obj.getString("fcstDate").equals(today)) {
                            weatherEntity = getFcstTimeEquals(obj, weatherEntity);
                            weatherEntity.setHarborName(HARBOR[i]);
                            weatherEntity.setFcstDate(obj.getString("fcstDate"));
                            weatherEntity.setFcstTime(obj.getString("fcstTime"));
                            switch(obj.getString("category")){
                                case "TMP" :
                                    weatherEntity.setFcstTmp(obj.getString("fcstValue"));
                                case "VEC" :
                                    weatherEntity.setFcstVec(obj.getString("fcstValue"));
                                    break;
                                case "SKY" :
                                    weatherEntity.setFcstSky(obj.getString("fcstValue"));
                                    break;
                                case "PTY" :
                                    weatherEntity.setFcstPty(obj.getString("fcstValue"));
                                    break;
                                case "POP" :
                                    weatherEntity.setFcstPop(obj.getString("fcstValue"));
                                    break;
                                case "WAV" :
                                    weatherEntity.setFcstWav(obj.getString("fcstValue"));
                                    break;
                                case "PCP" :
                                    weatherEntity.setFcstPcp(obj.getString("fcstValue"));
                                    break;
                                case "REH" :
                                    weatherEntity.setFcstReh(obj.getString("fcstValue"));
                                    break;
                                default: break;
                            }
                            weatherService.create(weatherEntity);
                        } else if (obj.getString("fcstDate").equals(tomorrow)) {
                            weatherEntity = getFcstTimeEquals(obj, weatherEntity);
                            weatherEntity.setHarborName(HARBOR[i]);
                            weatherEntity.setFcstDate(obj.getString("fcstDate"));
                            weatherEntity.setFcstTime(obj.getString("fcstTime"));
                            switch(obj.getString("category")){
                                case "TMP" :
                                    weatherEntity.setFcstTmp(obj.getString("fcstValue"));
                                case "VEC" :
                                    weatherEntity.setFcstVec(obj.getString("fcstValue"));
                                    break;
                                case "SKY" :
                                    weatherEntity.setFcstSky(obj.getString("fcstValue"));
                                    break;
                                case "PTY" :
                                    weatherEntity.setFcstPty(obj.getString("fcstValue"));
                                    break;
                                case "POP" :
                                    weatherEntity.setFcstPop(obj.getString("fcstValue"));
                                    break;
                                case "WAV" :
                                    weatherEntity.setFcstWav(obj.getString("fcstValue"));
                                    break;
                                case "PCP" :
                                    weatherEntity.setFcstPcp(obj.getString("fcstValue"));
                                    break;
                                case "REH" :
                                    weatherEntity.setFcstReh(obj.getString("fcstValue"));
                                    break;
                                default: break;
                            }
                            weatherService.create(weatherEntity);
                        } else if (obj.getString("fcstDate").equals(twoDaysLater)) {
//                            if(!obj.getString("fcstTime").equals(weatherEntity.getFcstTime())){
//                                weatherEntity = new WeatherEntity();
//                            }
                            weatherEntity = getFcstTimeEquals(obj, weatherEntity);
                            weatherEntity.setHarborName(HARBOR[i]);
                            weatherEntity.setFcstDate(obj.getString("fcstDate"));
                            weatherEntity.setFcstTime(obj.getString("fcstTime"));
                            switch(obj.getString("category")){
                                case "TMP" :
                                    weatherEntity.setFcstTmp(obj.getString("fcstValue"));
                                case "VEC" :
                                    weatherEntity.setFcstVec(obj.getString("fcstValue"));
                                    break;
                                case "SKY" :
                                    weatherEntity.setFcstSky(obj.getString("fcstValue"));
                                    break;
                                case "PTY" :
                                    weatherEntity.setFcstPty(obj.getString("fcstValue"));
                                    break;
                                case "POP" :
                                    weatherEntity.setFcstPop(obj.getString("fcstValue"));
                                    break;
                                case "WAV" :
                                    weatherEntity.setFcstWav(obj.getString("fcstValue"));
                                    break;
                                case "PCP" :
                                    weatherEntity.setFcstPcp(obj.getString("fcstValue"));
                                    break;
                                case "REH" :
                                    weatherEntity.setFcstReh(obj.getString("fcstValue"));
                                    break;
                                default: break;
                            }
                            weatherService.create(weatherEntity);
                        } else {
                            if(!obj.getString("fcstTime").equals(weatherEntity.getFcstTime())){
                                System.out.println(weatherEntity);
                                weatherEntity = new WeatherEntity();

                            }
                            weatherEntity.setHarborName(HARBOR[i]);
                            weatherEntity.setFcstDate(obj.getString("fcstDate"));
                            weatherEntity.setFcstTime(obj.getString("fcstTime"));
                            switch(obj.getString("category")){
                                case "TMP" :
                                    weatherEntity.setFcstTmp(obj.getString("fcstValue"));
                                case "VEC" :
                                    weatherEntity.setFcstVec(obj.getString("fcstValue"));
                                    break;
                                case "SKY" :
                                    weatherEntity.setFcstSky(obj.getString("fcstValue"));
                                    break;
                                case "PTY" :
                                    weatherEntity.setFcstPty(obj.getString("fcstValue"));
                                    break;
                                case "POP" :
                                    weatherEntity.setFcstPop(obj.getString("fcstValue"));
                                    break;
                                case "WAV" :
                                    weatherEntity.setFcstWav(obj.getString("fcstValue"));
                                    break;
                                case "PCP" :
                                    weatherEntity.setFcstPcp(obj.getString("fcstValue"));
                                    break;
                                case "REH" :
                                    weatherEntity.setFcstReh(obj.getString("fcstValue"));
                                    break;
                                default: break;
                            }
                            weatherService.create(weatherEntity);
                        }
                    }
                }
            }
            catch (Exception e){
                e.printStackTrace();
            }
        }else{
            log.info("baseTime error");
        }
        log.info("weather Data create method end");
    }
    private WeatherEntity getFcstTimeEquals(JSONObject obj, WeatherEntity weatherEntity){
        if(!obj.getString("fcstTime").equals(weatherEntity.getFcstTime())){
            System.out.println(weatherEntity);
            weatherEntity = new WeatherEntity();
            return weatherEntity;
        }
        return weatherEntity;
    }
    private WeatherEntity getFcstValue(JSONObject obj,WeatherEntity weatherEntity){
        switch(obj.getString("category")){
            case "TMP" :
                weatherEntity.setFcstTmp(obj.getString("fcstValue"));
                return weatherEntity;
            case "VEC" :
                weatherEntity.setFcstVec(obj.getString("fcstValue"));
                return weatherEntity;
            case "SKY" :
                weatherEntity.setFcstSky(obj.getString("fcstValue"));
                return weatherEntity;
            case "PTY" :
                weatherEntity.setFcstPty(obj.getString("fcstValue"));
                return weatherEntity;
            case "POP" :
                weatherEntity.setFcstPop(obj.getString("fcstValue"));
                return weatherEntity;
            case "WAV" :
                weatherEntity.setFcstWav(obj.getString("fcstValue"));
                return weatherEntity;
            case "PCP" :
                weatherEntity.setFcstPcp(obj.getString("fcstValue"));
                return weatherEntity;
            case "REH" :
                weatherEntity.setFcstReh(obj.getString("fcstValue"));
                return weatherEntity;
            default: break;
        }
        return null;
    }
}
