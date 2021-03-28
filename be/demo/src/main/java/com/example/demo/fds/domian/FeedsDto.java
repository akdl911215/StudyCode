package com.example.demo.fds.domian;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
public class FeedsDto implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private long feedNo;
	private String title;
	private String writer;
	private String content;
	private String addLoction;
	private String hashTag;
	private String regDate;
}