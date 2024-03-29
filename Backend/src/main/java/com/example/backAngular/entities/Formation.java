package com.example.backAngular.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import java.util.HashSet;
import java.util.Date;
import java.util.Set;

@Entity
@Data
public class Formation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titre;
    private String description;
    private Date dateDebut;
    private Date dateFin;


    @JsonIgnore
    @OneToMany(mappedBy = "formation")
    private Set<Adherant> adherants = new HashSet<>();
}
