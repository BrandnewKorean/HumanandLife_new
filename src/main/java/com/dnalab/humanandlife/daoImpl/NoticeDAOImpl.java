package com.dnalab.humanandlife.daoImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dnalab.humanandlife.dao.NoticeDAO;
import com.dnalab.humanandlife.vo.NoticeAttachVO;
import com.dnalab.humanandlife.vo.NoticeVO;
import com.dnalab.humanandlife.vo.Search;

@Repository
public class NoticeDAOImpl implements NoticeDAO{
	
	@Autowired
	SqlSession sqlsession;
	
	private static final String NS = "humanandlife.mappers.NoticeMapper.";

	@Override
	public List<NoticeVO> searchList(Search search) {
		return sqlsession.selectList(NS+"searchList", search);
	}

	@Override
	public int getSearchTotalRow(Search search) {
		return sqlsession.selectOne(NS+"getSearchTotalRow", search);
	}

	@Override
	public NoticeVO selectOne(int seq) {
		return sqlsession.selectOne(NS+"selectOne", seq);
	}

	@Override
	public List<NoticeAttachVO> getAttachList(int seq) {
		return sqlsession.selectList(NS+"getAttachList", seq);
	}
}
