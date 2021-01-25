package com.dnalab.humanandlife.service;

import java.util.Map;

import com.dnalab.humanandlife.vo.Search;
import com.dnalab.humanandlife.vo.StoreVO;

public interface StoreService {
	public Map<String, Object> getProductList(Search search, StoreVO vo);
}
