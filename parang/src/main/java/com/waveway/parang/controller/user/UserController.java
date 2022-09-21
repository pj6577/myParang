package com.waveway.parang.controller.user;

import com.waveway.parang.dto.ResponseDTO;
import com.waveway.parang.dto.UserDTO;
import com.waveway.parang.model.UserEntity;
import com.waveway.parang.security.TokenProvider;
import com.waveway.parang.service.user.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

//|------------------------------|
//| 2022-08-19 userController    |
//| 박재현                        |
//|  회원가입 로그인                |
//|------------------------------|
@Slf4j
@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/user")
public class UserController {
    //@RequiredArgsConstructor
    // 의존성 주입
    // 는 fianl이 있는 필드만 모아서 생성자를 만들어줌
    //final 안쓰면 userSerivce를 주입받지 못함
    private final UserService userService;


    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    private final TokenProvider tokenProvider;

//|------------------------------|
//| 2022-08-19 userController    |
//| 박재현                        |
//|  회원가입 컨트롤러              |
//| 요청 주소
//| localhost:3000/api/user/signup
//|------------------------------|


    @PostMapping(value = "/signup")
    public ResponseEntity<?> signUpUser(@RequestBody UserDTO userDTO) {
        try {
            log.info("signup url 컨트롤러");
            userDTO.setUserPassword(passwordEncoder.encode(userDTO.getUserPassword()));
            UserEntity user = userDTO.toEntity(userDTO);

            //service를 이용해 리포지터리에 유저 저장
            UserEntity signUp = userService.create(user);
            log.info("저장완료");

            // 응답 객체 만들기(비밀번호 제외)
            UserDTO responseUserDTO = UserDTO.builder()
                    .userId(signUp.getUserId())
                    .userName(signUp.getUserName())
                    .userNickName(signUp.getUserNickName())
                    .userProfilePicture(signUp.getUserProfilePicture())
                    .userPNum(signUp.getUserPNum())
                    .userEmail(signUp.getUserEmail())
                    .userAge(signUp.getUserAge())
                    .userSex(signUp.getUserSex())
                    .build();
            log.info("응답 객체 빌드");
            // 유저 정보를 항상 하나이므로 리스트로 만들 필요 없음
            //ResponseDTO를 사용해서 List로 만들어야함?
            return ResponseEntity.ok().body(responseUserDTO);

        } catch (Exception e) {
            ResponseDTO responseDTO = ResponseDTO.builder().error(e.getMessage()).build();


            return ResponseEntity.badRequest().body(responseDTO);
        }

    }




    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody UserDTO userDTO) {
        System.out.println("email : " + userDTO.getUserEmail());
        // 유저 정보 확인하기
        UserEntity user = userService.getByCredentials(userDTO.getUserEmail(),
                userDTO.getUserPassword(), passwordEncoder);
        System.out.println(user);

        if (user != null) {
            //토큰 생성
            final String token = tokenProvider.create(user);

            final UserDTO responseUserDTO = userDTO.builder()
                    .userId(user.getUserId())
                    .userName(user.getUserName())
                    .userNickName(user.getUserNickName())
                    .userProfilePicture(user.getUserProfilePicture())
                    .userPNum(user.getUserPNum())
                    .userEmail(user.getUserEmail())
                    .userPassword(user.getUserPassword())
                    .userAge(user.getUserAge())
                    .userSex(user.getUserSex())
                    .token(token)
                    .build();
            System.out.println(responseUserDTO);
            return ResponseEntity.ok().body(responseUserDTO);
        } else {
            ResponseDTO responseDTO = ResponseDTO.builder()
                    .error("Login failed")
                    .build();
            return ResponseEntity.badRequest().body(responseDTO);
        }
    }

    /**
     * 유저 정보 불러오기
     * */
    @RequestMapping(value = "/mypage", method = RequestMethod.POST)
    public ResponseEntity<?> getUserInfo(@RequestBody UserEntity userEntity){

        UserEntity user = userService.getUserInfo(userEntity.getUserId());
        System.out.println("hihi" + user.getUserName());
        final UserDTO responseUserDTO = UserDTO.builder()
                .userId(user.getUserId())
                .userName(user.getUserName())
                .userNickName(user.getUserNickName())
                .userProfilePicture(user.getUserProfilePicture())
                .userPNum(user.getUserPNum())
                .userEmail(user.getUserEmail())
                .userAge(user.getUserAge())
                .userSex(user.getUserSex())
                .build();

        return ResponseEntity.ok().body(responseUserDTO);
    }

    @RequestMapping(value = "/getUserInfo", method = RequestMethod.GET)
    public ResponseEntity<?> getUserInfo(@AuthenticationPrincipal Long userId){

        UserEntity user = userService.getUserInfo(userId);

        final UserDTO responseUserDTO = UserDTO.builder()
                .userId(user.getUserId())
                .userName(user.getUserName())
                .userNickName(user.getUserNickName())
                .userProfilePicture(user.getUserProfilePicture())
                .userPNum(user.getUserPNum())
                .userEmail(user.getUserEmail())
                .userAge(user.getUserAge())
                .userSex(user.getUserSex())
                .build();

        return ResponseEntity.ok().body(responseUserDTO);
    }

    @PutMapping("/updateinfo")
    public ResponseEntity<?> updateNickName(@AuthenticationPrincipal Long userId, @RequestBody UserDTO userDTO){
        log.info("userId : " + userId);
        log.info(userDTO.getUserNickName());

        userService.update(userId, userDTO);
        return ResponseEntity.ok().build();
    }
}


