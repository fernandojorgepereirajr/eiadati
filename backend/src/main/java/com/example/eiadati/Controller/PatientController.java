package com.example.eiadati.Controller;

import com.example.eiadati.Model.DTO.PatientDTO;
import com.example.eiadati.Model.Patient;
import com.example.eiadati.Security.SecurityHandler;
import com.example.eiadati.Service.PatientService;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({ "/paciente" })
@CrossOrigin(value = "*")
public class PatientController {
  @Autowired
  PatientService patientService;

  @Autowired
  SecurityHandler securityHandler;

  @RequestMapping(
    value = "/",
    consumes = MediaType.APPLICATION_JSON_VALUE,
    produces = MediaType.APPLICATION_JSON_VALUE,
    method = RequestMethod.POST
  )
  public ResponseEntity<?> save(
    @RequestBody PatientDTO pacienteDTO,
    HttpServletRequest http
  ) {
    try {
      if (
        securityHandler.autorizarAmbos(http.getHeader("authorization")) != true
      ) {
        return new ResponseEntity<String>(
          "Usuário não autorizado",
          HttpStatus.FORBIDDEN
        );
      }

      Patient patient = patientService.save(pacienteDTO);
      return new ResponseEntity<Patient>(patient, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<String>(
        e.getMessage(),
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }

  @RequestMapping(
    value = "/",
    produces = MediaType.APPLICATION_JSON_VALUE,
    method = RequestMethod.GET
  )
  public ResponseEntity<?> findAll(HttpServletRequest http) {
    try {
      if (
        securityHandler.autorizarMedico(http.getHeader("authorization")) != true
      ) {
        return new ResponseEntity<String>(
          "Usuário não autorizado!",
          HttpStatus.FORBIDDEN
        );
      }
      List<Patient> patients = patientService.findAll();
      return new ResponseEntity<List<Patient>>(patients, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<String>(
        e.getMessage(),
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }

  @DeleteMapping(value = "/{id}")
  public ResponseEntity<?> delete(
    @PathVariable Long id,
    HttpServletRequest http
  ) {
    try {
      if (
        securityHandler.autorizarMedico(http.getHeader("authorization")) != true
      ) {
        return new ResponseEntity<String>(
          "Usuário não autorizado!",
          HttpStatus.FORBIDDEN
        );
      }
      String r = patientService.delete(id);
      return new ResponseEntity<String>(r, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<String>(
        e.getMessage(),
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }
}
