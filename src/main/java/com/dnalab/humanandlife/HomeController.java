package com.dnalab.humanandlife;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {
	
	@RequestMapping(value = {"","/home"})
	public ModelAndView home(ModelAndView mv) {
		mv.setViewName("Home");
		return mv;
	}
	
	@RequestMapping(value = "/login-page")
	public ModelAndView loginpage(ModelAndView mv) {
		mv.setViewName("LoginPage");
		return mv;
	}
	
	@RequestMapping(value = "/join-terms")
	public ModelAndView terms(ModelAndView mv) {
		mv.setViewName("Terms");
		return mv;
	}
	
	@RequestMapping(value = "/join-page")
	public ModelAndView joinpage(ModelAndView mv, boolean use, boolean privacy) {
		mv.addObject("use", use);
		mv.addObject("privacy", privacy);
		mv.setViewName("Join");
		return mv;
	}
	
	@RequestMapping(value = "/find-idpw")
	public ModelAndView findid(ModelAndView mv) {
		mv.setViewName("FindIDPW");
		return mv;
	}
	
	@RequestMapping(value = {"/introduce", "/introduce/ceo"})
	public ModelAndView introduce1(ModelAndView mv) {
		mv.addObject("menu", "menu1");
		mv.setViewName("Introduce");
		return mv;
	}
	
	@RequestMapping(value = "/introduce/plan")
	public ModelAndView introduce2(ModelAndView mv) {
		mv.addObject("menu", "menu2");
		mv.setViewName("Introduce");
		return mv;
	}
	
	@RequestMapping(value = "/introduce/come")
	public ModelAndView introduce3(ModelAndView mv) {
		mv.addObject("menu", "menu3");
		mv.setViewName("Introduce");
		return mv;
	}
	
	@RequestMapping(value = "/ceo")
	public ModelAndView ceo(ModelAndView mv) {
		mv.setViewName("CEO");
		return mv;
	}
	
	@RequestMapping(value = "/business-plan")
	public ModelAndView businessplan(ModelAndView mv) {
		mv.setViewName("Business");
		return mv;
	}
	
	@RequestMapping(value = "/way-to-come")
	public ModelAndView waytocome(ModelAndView mv) {
		mv.setViewName("WaytoCome");
		return mv;
	}
}
