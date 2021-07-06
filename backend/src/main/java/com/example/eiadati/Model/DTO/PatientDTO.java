package com.example.eiadati.Model.DTO;

public class PatientDTO {
  private String name;

  private String cpf;

  private String uf;

  private String date;

  private int weight;

  private String heigth;

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

  public String getUf() {
    return uf;
  }

  public void setUf(String uf) {
    this.uf = uf;
  }

  public String getDate() {
    return date;
  }

  public void setDate(String date) {
    this.date = date;
  }

  public int getWeight() {
    return weight;
  }

  public void setWeight(int weight) {
    this.weight = weight;
  }

  public String getHeigth() {
    return heigth;
  }

  public void setHeigth(String heigth) {
    this.heigth = heigth;
  }
}
