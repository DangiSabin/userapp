package com.dangisabin.userappbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.dangisabin.userappbackend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{

}

