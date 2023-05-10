package com.sushant.spring.mentor_management.security;

import com.sushant.spring.mentor_management.session.SessionFilter;
import com.sushant.spring.mentor_management.user.CurrentUserService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class Config {
    private  final CurrentUserService currentUserService;
    private final SessionFilter sessionFilter;
    private final PasswordEncoder passwordEncoder;
    @Autowired
    public Config(CurrentUserService currentUserService,SessionFilter sessionFilter,PasswordEncoder passwordEncoder)
    { this.currentUserService = currentUserService;
        this.sessionFilter = sessionFilter;
        this.passwordEncoder = passwordEncoder;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http = http.cors().and().csrf().disable();
        http = http.exceptionHandling().authenticationEntryPoint(
                (request,response,ex)->{
                    response.sendError(HttpServletResponse.SC_UNAUTHORIZED,ex.getMessage());
                }
        ).and();
        http.securityMatcher("/company/**").authorizeHttpRequests(
                authorize->authorize.anyRequest().authenticated()
        ).httpBasic(withDefaults());
        http.addFilterBefore(sessionFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();

    }
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
            throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }


    @Autowired
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(currentUserService).passwordEncoder(passwordEncoder);
    }



}
