package com.dnalab.humanandlife;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.dnalab.humanandlife.service.UserService;
import com.dnalab.humanandlife.vo.UserVO;

@RequestMapping(value = "/service")
@Controller
public class ServiceController {
	
	@Autowired
	UserService userService;
	
	@RequestMapping(value = "login")
	public ModelAndView login(ModelAndView mv, HttpServletRequest request, UserVO vo, String inputType) {
		mv.addObject("code", userService.login(request, vo, inputType));
		mv.setViewName("jsonView");
		return mv;
	}
	
	@RequestMapping(value = "join")
	public ModelAndView join(ModelAndView mv, HttpServletRequest request, UserVO vo) {
		mv.addObject("code", userService.join(vo));
		mv.setViewName("jsonView");
		return mv;
	}
	
	@RequestMapping(value = "logout")
	public ModelAndView logout(ModelAndView mv, HttpServletRequest request) {
		mv.addObject("code", userService.logout(request));
		mv.setViewName("jsonView");
		return mv;
	}
}