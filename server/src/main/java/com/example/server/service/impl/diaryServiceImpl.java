package com.example.server.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.server.mapper.DiaryMapper;
import com.example.server.service.DiaryService;
import com.example.server.vo.diaryVO;

@Service
public class diaryServiceImpl implements DiaryService{
	@Autowired
	DiaryMapper diaryMapper;
	
	@Override
	public List<diaryVO> selectAll() throws java.lang.Exception {
		return diaryMapper.selectAll();
	}
}
