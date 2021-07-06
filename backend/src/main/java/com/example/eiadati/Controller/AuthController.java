package com.example.eiadati.Controller;

import com.example.eiadati.Model.DTO.AuthBody;
import com.example.eiadati.Service.AuthService;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({ "/auth" })
@CrossOrigin(value = "*")
public class AuthController {
  @Autowired
  AuthService authService;

  @PostMapping("/")
  public ResponseEntity<?> login(@RequestBody AuthBody data) {
    try {
      if (data.getName() == null) {
        return new ResponseEntity<String>(
          "Forneça um nome",
          HttpStatus.BAD_REQUEST
        );
      } else if (data.getPassword() == null) {
        return new ResponseEntity<String>(
          "Forneça uma senha",
          HttpStatus.BAD_REQUEST
        );
      }

      Map<String, Object> response = authService.login(data);

      return new ResponseEntity<Object>(
        response.get("message"),
        HttpStatus.valueOf((int) response.get("status"))
      );
    } catch (AuthenticationException e) {
      throw new BadCredentialsException("Invalid cpf/password supplied");
    }
  }
}
