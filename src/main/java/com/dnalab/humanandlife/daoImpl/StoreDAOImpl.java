package com.dnalab.humanandlife.daoImpl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dnalab.humanandlife.dao.StoreDAO;
import com.dnalab.humanandlife.vo.ProductEventVO;
import com.dnalab.humanandlife.vo.ProductImageVO;
import com.dnalab.humanandlife.vo.StoreVO;

@Repository
public class StoreDAOImpl implements StoreDAO{
	
	@Autowired
	SqlSession sqlsession;
	
	private static final String NS = "humanandlife.mappers.StoreMapper.";

	@Override
	public List<StoreVO> getList(Map<String, Object> param) {
		return sqlsession.selectList(NS+"getList", param);
	}

	@Override
	public List<ProductImageVO> getThumbnailList(String product_code) {
		return sqlsession.selectList(NS+"getThumbnailList", product_code);
	}

	@Override
	public ProductEventVO getEvent(ProductEventVO vo) {
		return sqlsession.selectOne(NS+"getEvent", vo);
	}
}
