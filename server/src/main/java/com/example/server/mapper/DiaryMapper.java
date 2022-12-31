package com.example.server.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.server.vo.diaryVO;

@Mapper
public interface DiaryMapper {
	
	public List<diaryVO> selectAll() throws java.lang.Exception;
}
