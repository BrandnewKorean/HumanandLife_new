package com.dnalab.humanandlife;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.dnalab.humanandlife.service.NoticeService;
import com.dnalab.humanandlife.service.StoreService;
import com.dnalab.humanandlife.service.UserService;
import com.dnalab.humanandlife.vo.Search;
import com.dnalab.humanandlife.vo.StoreVO;
import com.dnalab.humanandlife.vo.UserVO;

@RequestMapping(value = "/service")
@Controller
public class ServiceController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	NoticeService noticeService;
	
	@Autowired
	StoreService storeService;
	
	@RequestMapping(value = "login")
	public ModelAndView login(ModelAndView mv, HttpServletRequest request, UserVO vo) {
		mv.addObject("code", userService.login(request, vo));
		mv.setViewName("jsonView");
		return mv;
	}
	
	@RequestMapping(value = "join")
	public ModelAndView join(ModelAndView mv, HttpServletRequest request, UserVO vo) {
		mv.addObject("code", userService.join(request, vo));
		mv.setViewName("jsonView");
		return mv;
	}
	
	@RequestMapping(value = "logout")
	public ModelAndView logout(ModelAndView mv, HttpServletRequest request) {
		mv.addObject("code", userService.logout(request));
		mv.setViewName("jsonView");
		return mv;
	}
	
	@RequestMapping(value = "duplicateCheck")
	public ModelAndView duplicateCheck(ModelAndView mv, UserVO vo) {
		mv.addObject("code", userService.duplicateCheck(vo));
		mv.setViewName("jsonView");
		return mv;
	}
	
	@RequestMapping(value = "getProductList")
	public ModelAndView getProductList(ModelAndView mv, Search search, StoreVO vo) {
		mv.addObject("product", storeService.getProductList(search, vo));
		mv.setViewName("jsonView");
		return mv;
	}
	
	@RequestMapping(value = "getProduct")
	public ModelAndView getProduct(ModelAndView mv, StoreVO vo) {
		mv.addObject("product", storeService.getProduct(vo));
		mv.setViewName("jsonView");
		return mv;
	}
}