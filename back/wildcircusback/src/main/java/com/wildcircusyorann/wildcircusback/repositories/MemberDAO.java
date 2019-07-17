package com.wildcircusyorann.wildcircusback.repositories;

import com.wildcircusyorann.wildcircusback.entities.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberDAO extends JpaRepository<Member, Long> {
}
