package com.example.eiadati.Model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "patient")
public class Patient {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @NotNull(message = "Campo nome não pode ser nulo!")
  @NotEmpty(message = "Campo nome pode ser vazio!")
  @Column(name = "name")
  private String name;

  @Column(name = "cpf", unique = true)
  @NotNull(message = "Campo CPF não pode ser nulo!")
  @NotEmpty(message = "Campo CPF pode ser vazio!")
  @JsonIgnore
  private String cpf;

  @Column(name = "uf")
  @NotNull(message = "Campo UF não pode ser nulo!")
  @NotEmpty(message = "Campo UF pode ser vazio!")
  private String uf;

  @Column(name = "date")
  private String date;

  @Column(name = "weight")
  private int weight;

  @Column(name = "height")
  private String height;

  public Patient(
    String name,
    String cpf,
    String uf,
    String date,
    int weight,
    String height
  ) {
    super();
    this.name = name;
    this.cpf = cpf;
    this.uf = uf;
    this.date = date;
    this.weight = weight;
    this.height = height;
  }
}
