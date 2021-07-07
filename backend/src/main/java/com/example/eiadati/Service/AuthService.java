package com.example.eiadati.Service;

import com.example.eiadati.Model.DTO.AuthBody;
import com.example.eiadati.Model.User;
import com.example.eiadati.Repository.UserRepository;
import com.example.eiadati.Security.SecurityHandler;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
  @Autowired
  UserRepository userRepository;

  @Autowired
  SecurityHandler securityHandler;

  public Map<String, Object> login(AuthBody data) {
    try {
      Map<String, Object> responseData = new HashMap<>();

      User user = userRepository.findByNameIgnoreCase(data.getName());

      if (user == null) {
        responseData.put("status", 404);
        responseData.put("message", "Usuário não existe!");
      }

      Boolean senhaConfere = BCrypt.checkpw(
        data.getPassword(),
        user.getPassword()
      );

      if (!senhaConfere) {
        responseData.put("status", 401);
        responseData.put("message", "Senha incorreta!");
      } else {
        List<String> content = new ArrayList<>();
        String token = this.securityHandler.createJWT(user);
        content.add(token);
        content.add(user.getRole());
        responseData.put("status", 200);
        responseData.put("message", content);
      }

      return responseData;
    } catch (Exception e) {
      throw e;
    }
  }
}
