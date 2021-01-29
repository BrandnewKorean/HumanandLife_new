package com.dnalab.humanandlife.daoImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dnalab.humanandlife.dao.LayoutDAO;
import com.dnalab.humanandlife.vo.BannerVO;
import com.dnalab.humanandlife.vo.CategoryVO;
import com.dnalab.humanandlife.vo.HeaderBannerVO;
import com.dnalab.humanandlife.vo.YoutubeVO;

@Repository
public class LayoutDAOImpl implements LayoutDAO{
	
	@Autowired
	SqlSession sqlsession;
	
	private static final String NS = "humanandlife.mappers.LayoutMapper.";

	@Override
	public List<BannerVO> getBannerList(BannerVO vo) {
		return sqlsession.selectList(NS+"getBannerList", vo);
	}

	@Override
	public List<CategoryVO> getCategoryList() {
		return sqlsession.selectList(NS+"getCategoryList");
	}

	@Override
	public List<HeaderBannerVO> getHeaderBannerList() {
		return sqlsession.selectList(NS+"getHeaderBannerList");
	}

	@Override
	public YoutubeVO getYoutube() {
		return sqlsession.selectOne(NS+"getYoutube");
	}
}
