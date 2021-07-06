package com.example.eiadati.Model.DTO;


public class UserDTO {

	private String name;
	
	private String cpf;
	
	private String password;

	public UserDTO() {
	}

	public UserDTO(String name, String cpf, String password) {
		super();
		this.name = name;
		this.cpf = cpf;
		this.password = password;
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
}
