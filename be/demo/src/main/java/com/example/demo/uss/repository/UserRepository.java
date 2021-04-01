package com.example.demo.uss.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.uss.domain.User;

interface CustomUserRepository {
	}


public interface UserRepository extends JpaRepository<User, Long>,
								CustomUserRepository{

//	@Query("SELECT u FROM User u WHERE u.status = 1")
//	Collection<User> findAllActiveUsers();
//	
//
//	@Query("FROM User WHERE firstName = ?1")
//	List<User> findByFirstName(String firstName);
	
//	@Query("SELECT a FROM User a WHIRE a.userName = ?1 AND a.password - ?2")
//	List<User> findByUserNameAndPassword(String userName, String password);

	@Query(value = "select a from users a where a.username = :username and a.password = :password", nativeQuery = true)
	List<User> login(@Param("username") String username,
					 @Param("password") String password);
	
	
}
