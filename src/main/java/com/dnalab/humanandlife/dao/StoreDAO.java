package com.dnalab.humanandlife.dao;

import java.util.List;
import java.util.Map;

import com.dnalab.humanandlife.vo.ProductImageVO;
import com.dnalab.humanandlife.vo.StoreVO;

public interface StoreDAO {
	List<StoreVO> getList(Map<String, Object> param);
	List<ProductImageVO> getThumbnailList(String product_code);
}
