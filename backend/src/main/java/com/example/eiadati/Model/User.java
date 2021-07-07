package com.example.eiadati.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "tb_user")
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @NotNull(message = "Campo nome não pode ser nulo!")
  @NotEmpty(message = "Campo nome pode ser vazio!")
  @Column(name = "name", unique = true)
  private String name;

  @Column(name = "cpf", unique = true)
  @NotNull(message = "Campo CPF não pode ser nulo!")
  @NotEmpty(message = "Campo CPF pode ser vazio!")
  @JsonIgnore
  private String cpf;

  @Column(name = "password")
  @NotNull(message = "Campo senha não pode ser nulo!")
  @NotEmpty(message = "Campo senha pode ser vazio!")
  private String password;

  @Column(name = "role")
  @NotNull(message = "Campo Role não pode ser nulo!")
  @NotEmpty(message = "Campo Role pode ser vazio!")
  private String role;


  public User(String name, String cpf, String password, String role) {
    super();
    this.name = name;
    this.cpf = cpf;
    this.password = password;
    this.role = role;
  }
}
