package com.example.eiadati.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.eiadati.Model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {

}
