package com.dnalab.humanandlife.dao;

import java.util.List;
import java.util.Map;

import com.dnalab.humanandlife.vo.ProductEventVO;
import com.dnalab.humanandlife.vo.ProductImageVO;
import com.dnalab.humanandlife.vo.ProductOptionVO;
import com.dnalab.humanandlife.vo.StoreVO;

public interface StoreDAO {
	List<StoreVO> getList(Map<String, Object> param);
	int getTotalRow(Map<String, Object> param);
	List<ProductImageVO> getThumbnailList(String product_code);
	List<ProductImageVO> getImageList(String product_code);
	ProductEventVO getEvent(ProductEventVO vo);
	StoreVO getOne(StoreVO vo);
	List<ProductOptionVO> getNessOptionList(String product_code);
	List<ProductOptionVO> getAddOptionList(String product_code);
}
