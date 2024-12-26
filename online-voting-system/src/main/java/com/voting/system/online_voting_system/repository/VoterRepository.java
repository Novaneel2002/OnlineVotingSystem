package com.voting.system.online_voting_system.repository;

import com.voting.system.online_voting_system.model.Voter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VoterRepository extends JpaRepository<Voter, Long> {
    Voter findByVoterId(String voterId);
}
