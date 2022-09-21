package com.waveway.parang.model;

import com.waveway.parang.dto.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "user")
public class UserEntity extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JoinColumn(name = "user_id")
    private Long userId;

    @Column(name = "user_name",length = 255,nullable = false)
    private String userName;

    @Column(name = "user_nick_name", length = 255, nullable = false, unique = true)
    private String userNickName;

    @Column(name = "user_profile_picture", length = 255, nullable = true)
    private String userProfilePicture;

    @Column(name = "user_pnum",length = 255,nullable = false)
    private String userPNum;

    @Column(name = "user_email",length = 255,nullable = false)
    private String userEmail;

    @Column(name = "user_password",length = 255,nullable = false)
    private String userPassword;

    @Column(name = "user_age",length = 255,nullable = false)
    private String userAge;

    @Column(name = "user_sex",length = 255,nullable = false)
    private String userSex;

    @Column(name="user_role",length = 255,nullable = true)
    private String userRole;

    public void updateInfo(UserDTO userDTO){
        this.userNickName = userDTO.getUserNickName();
    }
}
