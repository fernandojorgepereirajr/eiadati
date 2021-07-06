package com.example.eiadati.Controller;

import com.example.eiadati.Model.DTO.UserDTO;
import com.example.eiadati.Model.User;
import com.example.eiadati.Repository.UserRepository;
import com.example.eiadati.Security.SecurityHandler;
import com.example.eiadati.Service.UserService;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({ "/usuario" })
@CrossOrigin(value = "*")
public class UserController {
  @Autowired
  UserRepository userRepository;

  @Autowired
  UserService userService;

  @Autowired
  SecurityHandler securityHandler;

  @PostMapping(value = "/")
  public ResponseEntity<?> save(
    @RequestBody UserDTO userDTO,
    HttpServletRequest http
  ) {
    try {
      if (
        securityHandler.autorizarMedico(http.getHeader("authorization")) != true
      ) {
        return new ResponseEntity<String>(
          "Usuário não autorizado!",
          HttpStatus.FORBIDDEN
        );
      }
      User user = userService.save(userDTO);
      return new ResponseEntity<User>(user, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<String>(
        e.getMessage(),
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }

  @GetMapping(value = "/")
  public ResponseEntity<?> findAll(HttpServletRequest http) {
    try {
      if (
        securityHandler.autorizarMedico(http.getHeader("authorization")) != true
      ) {
        return new ResponseEntity<String>(
          "Usuário não autorizado!",
          HttpStatus.FORBIDDEN
        );
      }
      List<User> users = userService.findAll();
      return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<String>(
        e.getMessage(),
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }

  @DeleteMapping(value = "/{id}")
  public ResponseEntity<?> delete(
    @PathVariable Long id,
    HttpServletRequest http
  ) {
    try {
      if (
        securityHandler.autorizarMedico(http.getHeader("authorization")) != true
      ) {
        return new ResponseEntity<String>(
          "Usuário não autorizado!",
          HttpStatus.FORBIDDEN
        );
      }
      String r = userService.delete(id);
      return new ResponseEntity<String>(r, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<String>(
        e.getMessage(),
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }
}
