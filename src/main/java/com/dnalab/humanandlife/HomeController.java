package com.dnalab.humanandlife;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.dnalab.humanandlife.service.NoticeService;
import com.dnalab.humanandlife.service.StoreService;
import com.dnalab.humanandlife.vo.Search;

@Controller
public class HomeController {
	
	@Autowired
	NoticeService noticeService;
	
	@Autowired
	StoreService storeService;
	
	@RequestMapping(value = {"","/home"})
	public ModelAndView home(ModelAndView mv, Search search) {
		mv.setViewName("Home");
		return mv;
	}
	
	@RequestMapping(value = "/login-page")
	public ModelAndView loginpage(ModelAndView mv) {
		mv.setViewName("LoginPage");
		return mv;
	}
	
	@RequestMapping(value = "/join-page")
	public ModelAndView joinpage(ModelAndView mv) {
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
	
	@RequestMapping(value = "notice")
	public ModelAndView notice(ModelAndView mv, Search search) {
		search.setPerPage(10);
		mv.addObject("notice", noticeService.getNoticeSearchList(search));
		mv.setViewName("Notice");
		return mv;
	}
	
	@RequestMapping(value = "notice/{currPage}")
	public ModelAndView notice(ModelAndView mv, @PathVariable int currPage, Search search) {
		search.setCurrPage(currPage);
		search.setPerPage(10);
		mv.addObject("notice", noticeService.getNoticeSearchList(search));
		mv.setViewName("Notice");
		return mv;
	}
	
	@RequestMapping(value = "notice/{currPage}/{seq}")
	public ModelAndView noticeview(ModelAndView mv, @PathVariable int currPage, @PathVariable int seq, Search search) {
		search.setCurrPage(currPage);
		mv.addObject("search", search);
		mv.addObject("vo", noticeService.getNotice(seq));
		mv.setViewName("NoticeView");
		return mv;
	}
}
