package com.example.backAngular.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Adherant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String prenom;
    private String contact;

    @ManyToOne
    @JoinColumn(name = "formation_id")
    private Formation formation;
}
