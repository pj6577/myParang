package com.waveway.parang.controller.email;

import com.waveway.parang.dto.MailDTO;
import com.waveway.parang.service.email.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController(value = "mail")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/mail/send")
    public String sendMail(@RequestBody MailDTO mailDto) {
        SimpleMailMessage message = new SimpleMailMessage();
        String randNum = Integer.toString((int)(Math.random()*10000));

        message.setFrom("wave.parng@gmail.com");
        message.setTo(mailDto.getAddress());
        message.setSubject("회원가입 이메일 인증 번호");
        message.setText(randNum);
        emailService.sendSimpleMessage(message);
        System.out.println("메일 전송 완료");

        return randNum;
    }
}