package com.waveway.parang.dto;

import com.waveway.parang.model.UserEntity;
import lombok.Builder;
import lombok.Getter;

@Getter
public class SocialLoginResponseDTO {
    //소셜로그인 시 body로 내려가는 사용자 정보

    private Long socialId;

    private String nickname;

    private boolean login;

    private String profileImage;

    //소셜 로그인할 때 프론트에 내려주는 값
    public SocialLoginResponseDTO(UserEntity user, boolean login) {
        this.socialId = user.getUserId();
        this.nickname = user.getUserNickName();
        this.login = login;  //login true/ false 상황
        this.profileImage = user.getUserProfilePicture();
    }

}
