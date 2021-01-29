package com.dnalab.humanandlife.daoImpl;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dnalab.humanandlife.dao.UserDAO;
import com.dnalab.humanandlife.vo.UserVO;

@Repository
public class UserDAOImpl implements UserDAO{
	
	@Autowired
	SqlSession sqlsession;
	
	private static final String NS = "humanandlife.mappers.UserMapper.";

	@Override
	public UserVO selectOnebyEmail(UserVO vo) {
		return sqlsession.selectOne(NS+"selectOnebyEmail", vo);
	}

	@Override
	public UserVO selectOnebyPhone(UserVO vo) {
		return sqlsession.selectOne(NS+"selectOnebyPhone", vo);
	}

	@Override
	public int insert(UserVO vo) {
		return sqlsession.insert(NS+"insert", vo);
	}

	@Override
	public int updateRecentAccess(UserVO vo) {
		return sqlsession.update(NS+"updateRecentAccess", vo);
	}
}
