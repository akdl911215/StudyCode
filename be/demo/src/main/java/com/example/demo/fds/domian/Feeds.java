package com.example.demo.fds.domian;

import javax.persistence.*;

import lombok.*;

@NoArgsConstructor
@Entity
@Getter
@Table(name = "feeds")
public class Feeds {
	
	@Id
	@GeneratedValue
	@Column(name = "feed_no")
	private long feedNo;
	
	@Column(name = "title")
	private String title;
	
	@Column(name = "writer")
	private String writer;
	
	@Column(name = "content")
	private String content;
	
	@Column(name = "add_location")
	private String addLoction;
	
	@Column(name = "hash_tag")
	private String hashTag;
	
	@Column(name = "reg_date")
	private String regDate;

	@Builder
	public Feeds(long feedNo, String title, String writer, String content, String addLoction, String hashTag,
			String regDate) {
		super();
		this.feedNo = feedNo;
		this.title = title;
		this.writer = writer;
		this.content = content;
		this.addLoction = addLoction;
		this.hashTag = hashTag;
		this.regDate = regDate;
	}

	public void update(String title, String writer, String content, String addLoction, String hashTag) {
		this.title = title;
		this.writer = writer;
		this.content = content;
		this.addLoction = addLoction;
		this.hashTag = hashTag;
	}
	
}
