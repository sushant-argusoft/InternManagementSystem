package com.sushant.spring.mentor_management.session;

import com.sushant.spring.mentor_management.user.CurrentUser;
import com.sushant.spring.mentor_management.user.CurrentUserService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class SessionFilter extends OncePerRequestFilter {
    private  final InMemorySessionRegistry inMemorySessionRegistry;

    private  final CurrentUserService currentUserService;
    @Autowired
    public SessionFilter(final InMemorySessionRegistry inMemorySessionRegistry ,final CurrentUserService currentUserService) {
        this.inMemorySessionRegistry = inMemorySessionRegistry;
        this.currentUserService = currentUserService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {
        final String sessionId = request.getHeader(HttpHeaders.AUTHORIZATION);

        if(sessionId == null || sessionId.length() == 0){
            chain.doFilter(request,response);
            return;
        }
        final String username = inMemorySessionRegistry.getUsernameForSession(sessionId);
        if(username == null){
            chain.doFilter(request,response);
            return;
        }
        final CurrentUser  currentUser = currentUserService.loadUserByUsername(username);
        final UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
                username, null , currentUser.getAuthorities()
        );
        auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        SecurityContextHolder.getContext().setAuthentication(auth);
        chain.doFilter(request, response);

    }
}
