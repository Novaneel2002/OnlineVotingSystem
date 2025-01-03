package com.voting.system.online_voting_system.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Party {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String symbol;

    @Column(nullable = false)
    private int voteCount;

    @Column(name = "image_url") // This will create a column named 'image_url' in the database
    private String image_url; // Store the image URL
}
