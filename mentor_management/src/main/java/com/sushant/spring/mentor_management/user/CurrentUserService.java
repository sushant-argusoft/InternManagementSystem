package com.sushant.spring.mentor_management.user;

import com.sushant.spring.mentor_management.entities.Person;
import com.sushant.spring.mentor_management.repositories.PersonRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CurrentUserService implements UserDetailsService {
    @Autowired
    private PersonRep personRep;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Person> person = personRep.findByEmail(email);
        return person.map(CurrentUser::new)
                .orElseThrow(()->new UsernameNotFoundException("Email not found"));
    }
}
