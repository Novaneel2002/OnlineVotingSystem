package com.voting.system.online_voting_system.repository;

import com.voting.system.online_voting_system.model.Party;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PartyRepository extends JpaRepository<Party, Long> {
}
