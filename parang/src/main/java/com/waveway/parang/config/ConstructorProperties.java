package com.waveway.parang.config;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;

@Getter
@RequiredArgsConstructor
@ConstructorBinding
@ConfigurationProperties("external")
public class ConstructorProperties {
    private final Aws aws;
    private final String weatherServiceKey;

    private final String jwtSecretKey;
    private final String fishApiKey;
    @Getter
    @RequiredArgsConstructor
    public static final class Aws{
        private final String region;
        private final String accessKey;
        private final String secretKey;
    }

}
