package com.example.eiadati.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.eiadati.Model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByCpf(String cpf);

	List<User> findByRole(String role);

	User findByNomeIgnoreCase(String nome);
}
