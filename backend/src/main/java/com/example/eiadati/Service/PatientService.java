package com.example.eiadati.Service;

import com.example.eiadati.Model.DTO.PatientDTO;
import com.example.eiadati.Model.Patient;
import com.example.eiadati.Repository.PatientRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class PatientService {
  @Autowired
  PatientRepository patientRepository;

  public Patient save(PatientDTO patient) throws Exception {
    try {
      String strong_salt = BCrypt.gensalt(10);
      String cpf_encrypted = BCrypt.hashpw(patient.getCpf(), strong_salt);

      Patient patientCreated = new Patient(
        patient.getName(),
        cpf_encrypted,
        patient.getUf(),
        patient.getDate(),
        patient.getWeight(),
        patient.getHeight()
      );
      patientRepository.save(patientCreated);
      return patientCreated;
    } catch (Exception e) {
      throw e;
    }
  }

  public List<Patient> findAll() {
    List<Patient> patients = this.patientRepository.findAll();

    return patients;
  }

  public String delete(Long id) {
    try {
      this.patientRepository.deleteById(id);
      return "patient deletado com sucesso!";
    } catch (Exception e) {
      throw e;
    }
  }
}
