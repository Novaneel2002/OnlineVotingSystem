package com.voting.system.online_voting_system.service;

import com.voting.system.online_voting_system.model.Voter;
import com.voting.system.online_voting_system.repository.VoterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VoterService {
    @Autowired
    private VoterRepository voterRepository;

    public Voter saveVoter(Voter voter) {
        return voterRepository.save(voter);
    }

    public Voter getVoterById(String voterId) {
        return voterRepository.findByVoterId(voterId);
    }
}
