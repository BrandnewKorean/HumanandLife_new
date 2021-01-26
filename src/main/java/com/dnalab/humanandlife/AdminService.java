package com.dnalab.humanandlife;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.dnalab.humanandlife.dao.LayoutDAO;
import com.dnalab.humanandlife.vo.BannerVO;
import com.dnalab.humanandlife.vo.CategoryVO;
import com.dnalab.humanandlife.vo.HeaderBannerVO;

@RequestMapping(value = "/admin")
@Controller
public class AdminService {
	
	@Autowired
	LayoutDAO layout;
	
	@RequestMapping(value = "getMainBanner")
	public ModelAndView getMainBanner(ModelAndView mv, BannerVO vo) {
		List<BannerVO> list = new ArrayList<BannerVO>();
		
		list = layout.getBannerList(vo);
		
		mv.addObject("list", list);
		mv.setViewName("jsonView");
		return mv;
	}
	
	@RequestMapping(value = "getCategoryList")
	public ModelAndView getCategoryList(ModelAndView mv) {
		List<CategoryVO> list = new ArrayList<CategoryVO>();
		
		list = layout.getCategoryList();
		
		mv.addObject("list", list);
		mv.setViewName("jsonView");
		return mv;
	}
	
	@RequestMapping(value = "getHeaderBanner")
	public ModelAndView getHeaderBanner(ModelAndView mv) {
		List<HeaderBannerVO> list = new ArrayList<HeaderBannerVO>();
		
		list = layout.getHeaderBannerList();
		
		mv.addObject("list", list);
		mv.setViewName("jsonView");
		return mv;
	}
}
