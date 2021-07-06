package com.example.eiadati.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "user")
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

  public User() {}

  public User(String name, String cpf, String password, String role) {
    super();
    this.name = name;
    this.cpf = cpf;
    this.password = password;
    this.role = role;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getCpf() {
    return cpf;
  }

  public void setCpf(String cpf) {
    this.cpf = cpf;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public void setUf(String password) {
    this.password = password;
  }

  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }
}
