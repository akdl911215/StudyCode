package com.example.demo.uss.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.uss.domain.User;

interface CustomUserRepository {
	}


public interface UserRepository extends JpaRepository<User, Long>,
								CustomUserRepository{

//	@Query(value = "select user_no userNo, username, password, user_email userEmail, user_address userAddress, user_phone_number userPhoneNumber,"
//			+ "from users a where a.username = :username and a.password = :password", nativeQuery = true)
	
//	@Query(value = "select a from users a where a.username = :username and a.password = :password", nativeQuery = true)	
	
//	@Query(value = "SELECT user_no, username, password from users a where username and password and userNo", nativeQuery = true)
	
	
//	@Query(value = "select user_no userNo, username from users where username = :username and password = :password", nativeQuery = true)

// @Query(value = "select user_no userNo, username, password from users where user_no='userNo' and username='username' and password = 'password'",nativeQuery = true)
	@Transactional
	@Query(value = "select user_no userNo, username from users where username = :username and password = :password", nativeQuery = true)
	String login(@Param("username") String username,
				@Param("password") String password);
	
	
}
