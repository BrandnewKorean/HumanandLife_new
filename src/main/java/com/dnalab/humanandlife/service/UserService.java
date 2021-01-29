package com.dnalab.humanandlife.service;

import javax.servlet.http.HttpServletRequest;

import com.dnalab.humanandlife.vo.UserVO;

public interface UserService {
	int login(HttpServletRequest request, UserVO vo);
	int join(HttpServletRequest request, UserVO vo);
	int logout(HttpServletRequest request);
	int duplicateCheck(UserVO vo);
}
