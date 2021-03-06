package com.dnalab.humanandlife.serviceImpl;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.dnalab.humanandlife.dao.UserDAO;
import com.dnalab.humanandlife.service.UserService;
import com.dnalab.humanandlife.vo.UserVO;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserDAO dao;
	
	@Autowired
	BCryptPasswordEncoder passwordEncoder;

	@Override
	public int login(HttpServletRequest request, UserVO vo) {
		String password = vo.getPassword();
		
		vo = dao.selectOnebyEmail(vo);
		
		if(vo != null) {
			if(passwordEncoder.matches(password, vo.getPassword())) {
				request.getSession().setAttribute("logEmail", vo.getEmail());
				request.getSession().setAttribute("authority", vo.getAuthority());
			}else {
				return 1;
			}
		}else {
			return 2;
		}
		
		return 0;
	}

	@Override
	public int join(HttpServletRequest request, UserVO vo) {
		UserVO user = new UserVO();
		user = dao.selectOnebyEmail(vo);
		
		if(user != null) {
			return 2;
		}
		
		String password = vo.getPassword();
		
		vo.setPassword(passwordEncoder.encode(password));
		
		int result = dao.insert(vo);
		
		if(result > 0) {
			vo = dao.selectOnebyEmail(vo);
			request.getSession().setAttribute("logEmail", vo.getEmail());
			request.getSession().setAttribute("authority", vo.getAuthority());
		}else {
			return 1;
		}
		
		return 0;
	}

	@Override
	public int logout(HttpServletRequest request) {
		String id = (String)request.getSession().getAttribute("logEmail");
		if(id != null) {
			request.getSession().invalidate();
			return 0;
		}else {
			return 1;
		}
	}

	@Override
	public int duplicateCheck(UserVO vo) {
		vo = dao.selectOnebyEmail(vo);
		
		if(vo != null) {
			return 1;
		}
		
		return 0;
	}
}
