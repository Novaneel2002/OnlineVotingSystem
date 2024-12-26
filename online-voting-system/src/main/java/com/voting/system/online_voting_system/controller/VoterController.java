package com.voting.system.online_voting_system.controller;

import com.voting.system.online_voting_system.model.Voter;
import com.voting.system.online_voting_system.service.VoterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin	
@RequestMapping("/api/voters")
public class VoterController {
    @Autowired
    private VoterService voterService;

    @PostMapping
    public Voter addVoter(@RequestBody Voter voter) {
        return voterService.saveVoter(voter);
    }

    @GetMapping("/{voterId}")
    public Voter getVoter(@PathVariable String voterId) {
        return voterService.getVoterById(voterId);
    }
}
