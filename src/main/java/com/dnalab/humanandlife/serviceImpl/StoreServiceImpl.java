package com.dnalab.humanandlife.serviceImpl;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dnalab.humanandlife.dao.StoreDAO;
import com.dnalab.humanandlife.service.StoreService;
import com.dnalab.humanandlife.vo.ProductImageVO;
import com.dnalab.humanandlife.vo.Search;
import com.dnalab.humanandlife.vo.StoreContentVO;
import com.dnalab.humanandlife.vo.StoreVO;

@Service
public class StoreServiceImpl implements StoreService{
	
	@Autowired
	StoreDAO dao;

	@Override
	public Map<String, Object> getMainList(Search search) {
		StoreVO vo = new StoreVO();
		Map<String, Object> param = new HashMap<String, Object>();
		Map<String, Object> result = new HashMap<String, Object>();
		
		StoreContentVO bestVO = new StoreContentVO();
		StoreContentVO newVO = new StoreContentVO();
		
		vo.setMain_category("Best");
		param.put("search", search);
		param.put("vo", vo);
		param.put("orderby", "count desc");
		
		List<StoreVO> bestlist = new ArrayList<StoreVO>();
		bestlist = dao.getList(param);
		
		Map<String, List<ProductImageVO>> bestImageMap = new HashMap<String, List<ProductImageVO>>();
		
		for(int i=0;i<bestlist.size();i++) {
			List<ProductImageVO> imagelist = new ArrayList<ProductImageVO>();
			imagelist = dao.getThumbnailList(bestlist.get(i).getProduct_code());
			
			bestImageMap.put(bestlist.get(i).getProduct_code(), imagelist);
		}
		
		vo.setMain_category("New");
		param.put("orderby", "seq asc");
		
		List<StoreVO> newlist = new ArrayList<StoreVO>();
		newlist = dao.getList(param);
		
		Map<String, List<ProductImageVO>> newImageMap = new HashMap<String, List<ProductImageVO>>();
		
		for(int i=0;i<newlist.size();i++) {
			List<ProductImageVO> imagelist = new ArrayList<ProductImageVO>();
			imagelist = dao.getThumbnailList(newlist.get(i).getProduct_code());
			
			newImageMap.put(newlist.get(i).getProduct_code(), imagelist);
		}
		
		bestVO.setStoreList(bestlist);
		bestVO.setProductImageMap(bestImageMap);
		
		newVO.setStoreList(newlist);
		newVO.setProductImageMap(newImageMap);
		
		result.put("best", bestVO);
		result.put("new", newVO);
		
		return result;
	}
}
