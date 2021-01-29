package com.dnalab.humanandlife.dao;

import com.dnalab.humanandlife.vo.UserVO;

public interface UserDAO {
	UserVO selectOnebyEmail(UserVO vo);
	UserVO selectOnebyPhone(UserVO vo);
	int insert(UserVO vo);
	int updateRecentAccess(UserVO vo);
}
