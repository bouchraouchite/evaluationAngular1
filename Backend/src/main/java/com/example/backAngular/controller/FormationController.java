package com.example.backAngular.controller;
import com.example.backAngular.entities.Formation;
import com.example.backAngular.repository.FormationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/formations")
public class FormationController {
    @Autowired
    private FormationRepository formationRepository;

    @GetMapping
    public List<Formation> getAllFormations() {
        return formationRepository.findAll();
    }

    @GetMapping("/{id}")
    public Formation getFormationById(@PathVariable Long id) {
        return formationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Formation not found with id: " + id));
    }

    @PostMapping
    public Formation createFormation(@RequestBody Formation formation) {
        return formationRepository.save(formation);
    }

    @PutMapping("/{id}")
    public Formation updateFormation(@PathVariable Long id, @RequestBody Formation updatedFormation) {
        Formation formation = formationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Formation not found with id: " + id));
        formation.setTitre(updatedFormation.getTitre());
        formation.setDescription(updatedFormation.getDescription());
        // Mettez à jour d'autres champs si nécessaire
        return formationRepository.save(formation);
    }

    @DeleteMapping("/{id}")
    public void deleteFormation(@PathVariable Long id) {
        formationRepository.deleteById(id);
    }

    @GetMapping("/search")
    public List<Formation> searchFormationsByTitle(@RequestParam String titre) {
        return formationRepository.findByTitreContaining(titre);
    }
}
