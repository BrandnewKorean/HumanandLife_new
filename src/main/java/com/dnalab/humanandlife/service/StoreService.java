package com.dnalab.humanandlife.service;

import java.util.Map;

import com.dnalab.humanandlife.vo.ProductInfoVO;
import com.dnalab.humanandlife.vo.ProductProvisionVO;
import com.dnalab.humanandlife.vo.Search;
import com.dnalab.humanandlife.vo.StoreVO;

public interface StoreService {
	public Map<String, Object> getProductList(Search search, StoreVO vo);
	public Map<String, Object> getProduct(StoreVO vo);
	public ProductInfoVO getProductInfo(ProductInfoVO vo);
	public ProductProvisionVO getProductProvision(ProductProvisionVO vo);
}
