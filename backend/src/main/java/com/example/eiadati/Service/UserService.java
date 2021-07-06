package com.example.eiadati.Service;

import com.example.eiadati.Model.DTO.UserDTO;
import com.example.eiadati.Model.User;
import com.example.eiadati.Repository.UserRepository;
import domain.Roles;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  @Autowired
  UserRepository userRepository;

  public User save(UserDTO user) throws Exception {
    try {
      String salt = BCrypt.gensalt(12);
      String cpf_encrypted = BCrypt.hashpw(user.getCpf(), salt);
      String password_encrypted = BCrypt.hashpw(user.getPassword(), salt);

      User userCreated = new User(
        user.getName(),
        cpf_encrypted,
        password_encrypted,
        Roles.ROLE_ENFERMEIRO
      );

      userRepository.save(userCreated);
      return userCreated;
    } catch (Exception e) {
      throw e;
    }
  }

  public List<User> findAll() {
    List<User> users = this.userRepository.findByRole("ENFERMEIRO");
    return users;
  }

  public String delete(Long id) {
    try {
      this.userRepository.deleteById(id);
      return "Usuário deletado com sucesso!";
    } catch (Exception e) {
      throw e;
    }
  }
}
