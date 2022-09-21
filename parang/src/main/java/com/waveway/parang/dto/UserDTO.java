package com.waveway.parang.dto;

import com.waveway.parang.model.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDTO {
    private Long userId;
    private String userName;
    private String userNickName;
    private String userProfilePicture;
    private String userPNum;
    private String userEmail;
    private String userPassword;
    private String userAge;
    private String userSex;
    private String userRole;
    private String token;



    public UserDTO(final UserEntity entity) {
        this.userName = entity.getUserName();
        this.userNickName = entity.getUserNickName();
        this.userProfilePicture = entity.getUserProfilePicture();
        this.userPNum = entity.getUserPNum();
        this.userEmail = entity.getUserEmail();
        this.userPassword = entity.getUserPassword();
        this.userAge = entity.getUserAge();
        this.userSex = entity.getUserSex();
        this.userRole = entity.getUserRole();
    }


    public UserEntity toEntity(final UserDTO dto) {
        return UserEntity.builder()
                .userName(dto.getUserName())
                .userNickName(dto.getUserNickName())
                .userProfilePicture(dto.getUserProfilePicture())
                .userPNum(dto.getUserPNum())
                .userEmail(dto.getUserEmail())
                .userPassword(dto.getUserPassword())
                .userAge(dto.getUserAge())
                .userSex(dto.getUserSex())
                .userRole(dto.getUserRole())
                .build();
    }
}
