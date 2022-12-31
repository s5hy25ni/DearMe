package com.example.server.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.example.server.service.DiaryService;
import com.example.server.vo.diaryVO;

@Controller
@RequestMapping("/diary")
public class diaryController {

	@Autowired
	private DiaryService diaryService;
	
	@GetMapping("/main")
	public ModelAndView selectAll() throws java.lang.Exception {
		ModelAndView mav = new ModelAndView();
		List<diaryVO> resultList = new ArrayList<>();
		diaryVO diaryVO = new diaryVO();
		try {
		resultList = diaryService.selectAll();
		} catch (java.lang.Exception e) {
			e.printStackTrace();
		}
		mav.addObject(resultList);
		mav.addObject("resultList", diaryVO);
		mav.setViewName("test");
		return mav;
	}
	
}
