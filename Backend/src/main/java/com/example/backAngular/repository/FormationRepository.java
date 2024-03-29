package com.example.backAngular.repository;
import com.example.backAngular.entities.Formation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FormationRepository extends JpaRepository<Formation, Long> {
    List<Formation> findByTitreContaining(String titre);
}