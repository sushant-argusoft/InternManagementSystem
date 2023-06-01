package com.sushant.spring.mentor_management.user;

import com.sushant.spring.mentor_management.entities.Person;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class CurrentUser implements UserDetails {
    private String email ;
     private String password;
     private List<GrantedAuthority> authorities;

     public CurrentUser(Person person){
         email = person.getEmail();
         password = person.getPassword();
         authorities = Arrays.stream(person.getRole().split(","))
                 .map(SimpleGrantedAuthority::new)
                 .collect(Collectors.toList());
     }

    public void setUsername(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;}
    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
