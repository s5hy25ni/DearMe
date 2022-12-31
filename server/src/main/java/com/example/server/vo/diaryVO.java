package com.example.server.vo;

import org.apache.ibatis.type.Alias;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Setter
@Getter
@EqualsAndHashCode(callSuper=false)
@Alias("diaryVO")
public class diaryVO {
	private Integer askId;
	private String askContent;
}
