package com.waveway.parang.repository;

import com.waveway.parang.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// <테이블명, primary key의 타입>
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    // 아이디로 찾기
    UserEntity findByUserEmail(String userEmail);

    // 사용자가 존재하는지 검사
    Boolean existsByUserEmail(String userEmail);
    //user id 로 사용자 찾기
    UserEntity findByUserId(Long UserId);

    // 사용자 아이디/패스워드가 같은지 검사
//    UserEntity findByUsernameAndPassword(String username, String password);

}