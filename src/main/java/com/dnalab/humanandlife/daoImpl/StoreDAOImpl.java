package com.dnalab.humanandlife.daoImpl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dnalab.humanandlife.dao.StoreDAO;
import com.dnalab.humanandlife.vo.ProductEventVO;
import com.dnalab.humanandlife.vo.ProductImageVO;
import com.dnalab.humanandlife.vo.ProductInfoVO;
import com.dnalab.humanandlife.vo.ProductOptionVO;
import com.dnalab.humanandlife.vo.ProductProvisionVO;
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
	public int getTotalRow(Map<String, Object> param) {
		return sqlsession.selectOne(NS+"getTotalRow", param);
	}

	@Override
	public List<ProductImageVO> getThumbnailList(String product_code) {
		return sqlsession.selectList(NS+"getThumbnailList", product_code);
	}

	@Override
	public ProductEventVO getEvent(ProductEventVO vo) {
		return sqlsession.selectOne(NS+"getEvent", vo);
	}

	@Override
	public StoreVO getOne(StoreVO vo) {
		return sqlsession.selectOne(NS+"getOne", vo);
	}

	@Override
	public List<ProductImageVO> getImageList(String product_code) {
		return sqlsession.selectList(NS+"getImageList", product_code);
	}

	@Override
	public List<ProductOptionVO> getNessOptionList(String product_code) {
		return sqlsession.selectList(NS+"getNessOptionList", product_code);
	}

	@Override
	public List<ProductOptionVO> getAddOptionList(String product_code) {
		return sqlsession.selectList(NS+"getAddOptionList", product_code);
	}

	@Override
	public ProductInfoVO getProductInfo(ProductInfoVO vo) {
		return sqlsession.selectOne(NS+"getProductInfo", vo);
	}

	@Override
	public ProductProvisionVO getProductProvision(ProductProvisionVO vo) {
		return sqlsession.selectOne(NS+"getProductProvision", vo);
	}
}
