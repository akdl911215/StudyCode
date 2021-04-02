package com.example.demo.uss.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.uss.domain.User;

interface CustomUserRepository {
	}


public interface UserRepository extends JpaRepository<User, Long>,
								CustomUserRepository{

	@Query(value = "select user_no userNo, username, password, user_email userEmail, user_address userAddress, user_phone_number userPhoneNumber,"
			+ "from users a where a.username = :username and a.password = :password", nativeQuery = true)
	User login(@Param("username") String username,
				@Param("password") String password);
	
	
}
