package com.dnalab.humanandlife;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.dnalab.humanandlife.service.NoticeService;
import com.dnalab.humanandlife.service.StoreService;
import com.dnalab.humanandlife.vo.ProductInfoVO;
import com.dnalab.humanandlife.vo.ProductProvisionVO;
import com.dnalab.humanandlife.vo.Search;
import com.dnalab.humanandlife.vo.StoreVO;

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
	
	@RequestMapping(value = "/introduce")
	public ModelAndView introduce(ModelAndView mv) {
		mv.setViewName("Introduce");
		return mv;
	}
	
	@RequestMapping(value = "/introduce/ceo")
	public ModelAndView ceo(ModelAndView mv) {
		mv.addObject("menu", "menu1");
		mv.setViewName("Introduce");
		return mv;
	}
	
	@RequestMapping(value = "/introduce/plan")
	public ModelAndView plan(ModelAndView mv) {
		mv.addObject("menu", "menu2");
		mv.setViewName("Introduce");
		return mv;
	}
	
	@RequestMapping(value = "/introduce/way")
	public ModelAndView way(ModelAndView mv) {
		mv.addObject("menu", "menu3");
		mv.setViewName("Introduce");
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
	
	@RequestMapping(value = "list")
	public ModelAndView list(ModelAndView mv, StoreVO vo, Search search) {
		if(search.getKeyword() == null) search.setKeyword("");
		mv.addObject("search", search);
		mv.addObject("vo", vo);
		mv.setViewName("ProductList");
		return mv;
	}
	
	@RequestMapping(value = "product")
	public ModelAndView product(ModelAndView mv, StoreVO vo) {
		mv.addObject("product_code", vo.getProduct_code());
		mv.setViewName("Product");
		return mv;
	}
	
	@RequestMapping(value = "productInfo")
	public ModelAndView productInfo(ModelAndView mv, ProductInfoVO vo, ProductProvisionVO vo2) {
		mv.addObject("info", storeService.getProductInfo(vo));
		mv.addObject("provision", storeService.getProductProvision(vo2));
		mv.setViewName("ProductInfo");
		return mv;
	}
	
	@RequestMapping(value = "productRefund")
	public ModelAndView productRefund(ModelAndView mv) {
		mv.setViewName("ProductRefund");
		return mv;
	}
	
	@RequestMapping(value = "productSalesman")
	public ModelAndView productSalesman(ModelAndView mv) {
		mv.setViewName("ProductSalesman");
		return mv;
	}
	
	@RequestMapping(value = "/policy/use")
	public ModelAndView termsUse(ModelAndView mv) {
		mv.setViewName("use");
		return mv;
	}
	
	@RequestMapping(value = "/policy/trade")
	public ModelAndView termsTrade(ModelAndView mv) {
		mv.setViewName("trade");
		return mv;
	}
	
	@RequestMapping(value = "/policy/privacy-use")
	public ModelAndView termsPrivacyuse(ModelAndView mv) {
		mv.setViewName("privacyuse");
		return mv;
	}
	
	@RequestMapping(value = "/policy/privacy")
	public ModelAndView termsPrivacy(ModelAndView mv) {
		mv.setViewName("privacy");
		return mv;
	}
}
