package com.waveway.parang.dto;

import com.waveway.parang.model.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SocialUserInfoDTO {
    private long socialId;
    private String nickname;
    private String email;
    private String profileImage;

    public SocialUserInfoDTO(UserEntity user) {
        this.socialId = user.getUserId();
        this.nickname = user.getUserNickName();
        this.email = user.getUserName();
        this.profileImage = user.getUserProfilePicture();
    }
}