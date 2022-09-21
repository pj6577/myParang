package com.waveway.parang.security;

import com.waveway.parang.config.ConstructorProperties;
import com.waveway.parang.model.UserEntity;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Slf4j
@Service
// 토큰 생성, 위조여부 확인
public class TokenProvider {
    @Autowired
    private ConstructorProperties cp;

    private String createSecretKey(){
        String SECRET_KEY = cp.getJwtSecretKey();
        return SECRET_KEY;
    }

    private Key createHmacShaKey(String SECRET_KEY){

        Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes(StandardCharsets.UTF_8));
        return key;
    }


    public String create(UserEntity userEntity) {
        // 유효기한 설정(지금부터 1일)
        Date expiryDate = Date.from(Instant.now().plus(1, ChronoUnit.DAYS));

        // JWT 토큰 생성
        return Jwts.builder()
                // 헤더(header)에 들어갈 내용 및 서명을 하기 위한 SECRET_KEY
                // 시그니처 생성하는 알고리즘 방법, 키 넣어주어야 함
                .signWith(createHmacShaKey(createSecretKey()), SignatureAlgorithm.HS256)
                // 페이로드(payload)에 들어갈 내용
                .setSubject(Long.toString(userEntity.getUserId()))
                .setIssuer("parang")
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)
                .compact();
    }

    /** 사용자로부터 토큰을 받아와 그 토큰을 가진 사용자 id 추출한다.
     * 토큰을 디코딩 및 파싱하여 토큰의 위조 여부 확인하는 작업*/


    public String validateAndGetUserId(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(createSecretKey().getBytes())
                .build()
                // 암호화된 페이로드를 복호화
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }


}