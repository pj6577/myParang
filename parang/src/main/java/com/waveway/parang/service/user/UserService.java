package com.waveway.parang.service.user;

import com.waveway.parang.dto.UserDTO;
import com.waveway.parang.model.UserEntity;
import com.waveway.parang.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Slf4j
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    /** 
     * 아이디 (이메일) 유효성 / 중복검사
     * */
    public UserEntity create(final UserEntity userEntity) {
        try{
            log.info("createService");
            // 1. userEntity 유효성 체크
            if(userEntity == null || userEntity.getUserEmail() == null) {
                // 예외 던지기
                throw new RuntimeException("Invalid arguments");
            }
            final String userEmail = userEntity.getUserEmail();

            // 2. 중복검사
            if(userRepository.existsByUserEmail(userEmail)) {
                // 있으면 경고 띄어주기
                log.warn("Username already exists {}", userEmail);
                // 또 예외 던지기
                throw new RuntimeException("username already exists");
            }
            log.info("중복검사 끝");
            return userRepository.save(userEntity);
        }catch (Exception e){
            e.printStackTrace();
            throw new IllegalStateException();
        }

    }


    /**
     * 로그인 아이디 & 비밀번호 일치 확인 
     * */
    public UserEntity getByCredentials(final String userEmail, final String userPassword,
                                       final PasswordEncoder encoder)
    {
        // DB에 있는 사용자 계정 정보
        final UserEntity originalUser = userRepository.findByUserEmail(userEmail);

        // matches 메서드를 이용해 패스워드가 같은지 확인
        if(originalUser != null && encoder.matches(userPassword, originalUser.getUserPassword())) {
            return originalUser;
        }

        return null;
    }
    
    /** 
     * 회원정보 불러오기
     * */
    public UserEntity getUserInfo(Long userId) {
        System.out.println(userId);
        return userRepository.findByUserId(userId);
    }

    @Transactional
    public void update(Long userId, UserDTO userDTO) {
        UserEntity findUser = userRepository.findByUserId(userId);
        findUser.updateInfo(userDTO);
    }
}