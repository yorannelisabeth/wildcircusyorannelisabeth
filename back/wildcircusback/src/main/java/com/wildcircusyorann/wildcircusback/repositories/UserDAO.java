package com.wildcircusyorann.wildcircusback.repositories;

import com.wildcircusyorann.wildcircusback.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDAO extends JpaRepository<User, Long> {

    public User findByEmailAndPassword(String p_email, String p_password);
    public User findByUsername(String username);
}
