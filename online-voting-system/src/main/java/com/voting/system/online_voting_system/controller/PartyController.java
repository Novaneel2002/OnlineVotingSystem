package com.voting.system.online_voting_system.controller;

import com.voting.system.online_voting_system.model.Party;
import com.voting.system.online_voting_system.service.PartyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin	
@RequestMapping("/api/parties")
public class PartyController {
    @Autowired
    private PartyService partyService;

    @GetMapping
    public List<Party> getAllParties() {
        return partyService.getAllParties();
    }

    @PostMapping
    public Party addParty(@RequestBody Party party) {
        return partyService.saveParty(party);
    }

    @PutMapping("/{partyId}/vote")
    public void incrementVote(@PathVariable Long partyId) {
        partyService.incrementVote(partyId);
    }
}
