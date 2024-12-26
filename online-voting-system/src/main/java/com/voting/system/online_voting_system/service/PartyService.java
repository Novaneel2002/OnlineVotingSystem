package com.voting.system.online_voting_system.service;

import com.voting.system.online_voting_system.model.Party;
import com.voting.system.online_voting_system.repository.PartyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PartyService {
    @Autowired
    private PartyRepository partyRepository;

    public List<Party> getAllParties() {
        return partyRepository.findAll();
    }

    public Party saveParty(Party party) {
        return partyRepository.save(party);
    }

    public void incrementVote(Long partyId) {
        Party party = partyRepository.findById(partyId).orElseThrow(() -> new RuntimeException("Party not found"));
        party.setVoteCount(party.getVoteCount() + 1);
        partyRepository.save(party);
    }
}
