package com.example.demo.uss.domain;

import javax.persistence.*;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue
	
	@Column(name = "user_no")
	private long userNo;
	
	@Column(name = "user_name")
	private String userName;
	
	@Column(name = "user_password")
	private String userPassword;
	
	@Column(name = "user_email")
	private String userEmail;
	
	@Column(name = "user_address")
	private String userAddress;
	
	@Column(name = "user_phone_number")
	private String userPhoneNumber;

	@Builder
	public User(long userNo, String userName, String userPassword, String userEmail, String userAddress,
			String userPhoneNumber) {
		super();
		this.userNo = userNo;
		this.userName = userName;
		this.userPassword = userPassword;
		this.userEmail = userEmail;
		this.userAddress = userAddress;
		this.userPhoneNumber = userPhoneNumber;
	}	
	
	
}