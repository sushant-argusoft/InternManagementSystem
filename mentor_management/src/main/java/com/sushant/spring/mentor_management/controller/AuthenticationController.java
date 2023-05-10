package com.sushant.spring.mentor_management.controller;

import com.sushant.spring.mentor_management.dto.ResponseDTO;
import com.sushant.spring.mentor_management.dto.UserDTO;
import com.sushant.spring.mentor_management.session.InMemorySessionRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/company")
public class AuthenticationController {
    @Autowired
    public AuthenticationManager manager;
    @Autowired
    public InMemorySessionRegistry sessionRegistry;
    @PostMapping("/login")
    public ResponseEntity<ResponseDTO> login(@RequestBody UserDTO user){
        manager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
        final String sessionID = sessionRegistry.registerSession(user.getUsername());
        ResponseDTO response = new ResponseDTO();
        response.setSessionId(sessionID);
        return ResponseEntity.ok(response);
    }
}
