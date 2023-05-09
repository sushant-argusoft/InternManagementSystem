package com.sushant.spring.mentor_management.user;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

import java.util.HashMap;
@Component

public class UserInMemoryRepository {
    private final HashMap<String , CurrentUser> REGISTERED_USERS = new HashMap<>(2);
    @PostConstruct
    public void setupUsers(){
        REGISTERED_USERS.put("user1", buildCurrentUser(
                "user1","$2a$12$vJWrckumZ8LQQYHm9QxdmeDJIyYHCEPdu8HMQkjco0zxcG0ocqqcK"
        ));
        REGISTERED_USERS.put("user2", buildCurrentUser(
                "user2","$2a$12$j013TxXYFuam9bcjxW.H2u/YrKxe.ZcQEUtocdbXe6ECwLpe8K6M."
        ));
    }

    private static CurrentUser buildCurrentUser(String username, String password) {
        final CurrentUser currentUser = new CurrentUser();
        currentUser.setUsername(username);
        currentUser.setPassword(password);
        return currentUser;

    }

    public CurrentUser findUserByUsername(final String username){
        return REGISTERED_USERS.get(username);
    }
}
