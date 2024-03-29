package com.example.backAngular.controller;

import com.example.backAngular.entities.Adherant;
import com.example.backAngular.entities.Formation;
import com.example.backAngular.repository.AdherantRepository;
import com.example.backAngular.repository.FormationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/adherants")
public class AdherantController {
    @Autowired
    private AdherantRepository adherantRepository;

    @Autowired
    private FormationRepository formationRepository;

    @GetMapping
    public List<Adherant> getAllAdherants() {
        return adherantRepository.findAll();
    }

    @GetMapping("/{id}")
    public Adherant getAdherantById(@PathVariable Long id) {
        return adherantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Adherant not found with id: " + id));
    }

    @PostMapping
    public Adherant createAdherant(@RequestBody Adherant adherant) {
        return adherantRepository.save(adherant);
    }

    @PutMapping("/{id}")
    public Adherant updateAdherant(@PathVariable Long id, @RequestBody Adherant updatedAdherant) {
        Adherant adherant = adherantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Adherant not found with id: " + id));
        adherant.setNom(updatedAdherant.getNom());
        adherant.setPrenom(updatedAdherant.getPrenom());
        adherant.setContact(updatedAdherant.getContact());
        adherant.setFormation(updatedAdherant.getFormation());
        return adherantRepository.save(adherant);
    }

    @DeleteMapping("/{id}")
    public void deleteAdherant(@PathVariable Long id) {
        adherantRepository.deleteById(id);
    }

    @GetMapping("/search")
    public List<Formation> searchFormationsByTitle(@RequestParam String titre) {
        return formationRepository.findByTitreContaining(titre);}
}