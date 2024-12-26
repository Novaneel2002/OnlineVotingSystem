package com.voting.system.online_voting_system.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Voter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String voterId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;
}
