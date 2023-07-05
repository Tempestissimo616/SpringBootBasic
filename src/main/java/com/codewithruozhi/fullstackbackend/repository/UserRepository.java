package com.codewithruozhi.fullstackbackend.repository;

import com.codewithruozhi.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
