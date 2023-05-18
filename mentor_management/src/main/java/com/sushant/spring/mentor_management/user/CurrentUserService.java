package com.sushant.spring.mentor_management.user;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CurrentUserService implements UserDetailsService {
    private final UserInMemoryRepository userInMemoryRepository;
    private final UserRepository repository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    public CurrentUserService(UserInMemoryRepository userInMemoryRepository, UserRepository repository) {
        this.userInMemoryRepository = userInMemoryRepository;
        this.repository = repository;
    }




    @PostConstruct
    public void addFirstUser(){
        UserEntity userEntity = new UserEntity("email@gmai.com", passwordEncoder.encode("some-password"));
        repository.save(userEntity);
    }

    @Override
    public CurrentUser loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = repository.findByUsername(username);
        if(user != null){
            final CurrentUser currentUser = new CurrentUser();
            currentUser.setUsername(user.getUsername());
            currentUser.setPassword(user.getPassword());
            return currentUser;
        }


        final CurrentUser currentUser = userInMemoryRepository.findUserByUsername(username);
        if(currentUser == null) {
            throw new UsernameNotFoundException("Failed to find user with username: "+ username);
        }
        return currentUser;
    }
}
