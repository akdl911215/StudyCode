package com.example.demo.uss.domain;

import java.io.Serializable;

import lombok.Builder;
import lombok.Getter;

@Getter
public class UserDto implements Serializable{
	private static final long serialVersionUID = 1L;

	private long userNo;
	private String userName;
	private String userPassword;
	private String userEmail;
	private String userAddress;
	private String userPhoneNumber;
	
	@Builder
	public UserDto(long userNo, String userName, String userPassword, String userEmail, String userAddress,
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
