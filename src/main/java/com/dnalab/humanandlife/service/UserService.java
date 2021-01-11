package com.dnalab.humanandlife.service;

import javax.servlet.http.HttpServletRequest;

import com.dnalab.humanandlife.vo.UserVO;

public interface UserService {
	int login(HttpServletRequest request, UserVO vo, String inputType);
	int join(UserVO vo);
	int logout(HttpServletRequest request);
}
