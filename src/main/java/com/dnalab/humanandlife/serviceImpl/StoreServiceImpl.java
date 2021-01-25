package com.dnalab.humanandlife.serviceImpl;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dnalab.humanandlife.dao.StoreDAO;
import com.dnalab.humanandlife.service.StoreService;
import com.dnalab.humanandlife.vo.ProductEventVO;
import com.dnalab.humanandlife.vo.ProductImageVO;
import com.dnalab.humanandlife.vo.Search;
import com.dnalab.humanandlife.vo.StoreContentVO;
import com.dnalab.humanandlife.vo.StoreVO;

@Service
public class StoreServiceImpl implements StoreService{
	
	@Autowired
	StoreDAO dao;

	@Override
	public Map<String, Object> getProductList(Search search, StoreVO vo) {
		Map<String, Object> param = new HashMap<String, Object>();
		Map<String, Object> result = new HashMap<String, Object>();
		
		StoreContentVO VO = new StoreContentVO();
		
		param.put("search", search);
		param.put("vo", vo);
		param.put("orderby", "count desc");
		
		List<StoreVO> list = new ArrayList<StoreVO>();
		list = dao.getList(param);
		
		Map<String, List<ProductImageVO>> ImageMap = new HashMap<String, List<ProductImageVO>>();
		List<ProductEventVO> eventList = new ArrayList<ProductEventVO>();
		
		for(int i=0;i<list.size();i++) {
			List<ProductImageVO> imagelist = new ArrayList<ProductImageVO>();
			
			imagelist = dao.getThumbnailList(list.get(i).getProduct_code());
			
			ImageMap.put(list.get(i).getProduct_code(), imagelist);
			
			ProductEventVO event = new ProductEventVO();
			event.setProduct_code(list.get(i).getProduct_code());
			event = dao.getEvent(event);
			
			if(event != null) {
				int event_price = list.get(i).getPrice();
				
				if(event.isIspersent()) {
					event_price = Math.round((list.get(i).getPrice()*((float)(100 - event.getPersent())/100))/event.getRounds())*event.getRounds();
				}else if(event.isIsdiscount()) {
					event_price = list.get(i).getPrice() - event.getDiscount();
				}
				
				list.get(i).setEvent_price(event_price);
			}
			
			eventList.add(event);
		}
		
		VO.setStoreList(list);
		VO.setProductImageMap(ImageMap);
		VO.setEventList(eventList);
		
		result.put("vo", VO);
		
		return result;
	}
}
