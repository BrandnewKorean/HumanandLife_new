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
import com.dnalab.humanandlife.vo.ProductOptionVO;
import com.dnalab.humanandlife.vo.Search;
import com.dnalab.humanandlife.vo.StoreContentVO;
import com.dnalab.humanandlife.vo.StoreOneVO;
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
		
		int totalRow = dao.getTotalRow(param);
		search.setTotalRow(totalRow);
		search.setStartEnd();
		
		List<StoreVO> list = new ArrayList<StoreVO>();
		list = dao.getList(param);
		
		Map<String, List<ProductImageVO>> imageMap = new HashMap<String, List<ProductImageVO>>();
		List<ProductEventVO> eventList = new ArrayList<ProductEventVO>();
		
		for(int i=0;i<list.size();i++) {
			List<ProductImageVO> imagelist = new ArrayList<ProductImageVO>();
			
			imagelist = dao.getThumbnailList(list.get(i).getProduct_code());
			
			imageMap.put(list.get(i).getProduct_code(), imagelist);
			
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
		VO.setProductImageMap(imageMap);
		VO.setEventList(eventList);
		
		result.put("vo", VO);
		result.put("search", search);
		return result;
	}

	@Override
	public Map<String, Object> getProduct(StoreVO vo) {
		Map<String, Object> result = new HashMap<String, Object>();
		
		StoreOneVO VO = new StoreOneVO();
		
		vo = dao.getOne(vo);
		
		List<ProductImageVO> imageList = new ArrayList<ProductImageVO>();
		imageList = dao.getImageList(vo.getProduct_code());
		
		ProductEventVO event = new ProductEventVO();
		event.setProduct_code(vo.getProduct_code());
		event = dao.getEvent(event);
		
		if(event != null) {
			int event_price = vo.getPrice();
			
			if(event.isIspersent()) {
				event_price = Math.round((vo.getPrice()*((float)(100 - event.getPersent())/100))/event.getRounds())*event.getRounds();
			}else if(event.isIsdiscount()) {
				event_price = vo.getPrice() - event.getDiscount();
			}
			
			vo.setEvent_price(event_price);
		}
		
		Map<Integer, List<ProductOptionVO>> nessOptionMap = new HashMap<Integer, List<ProductOptionVO>>();
		Map<Integer, List<ProductOptionVO>> addOptionMap = new HashMap<Integer, List<ProductOptionVO>>();
		
		List<ProductOptionVO> nessOptionList = new ArrayList<ProductOptionVO>();
		List<ProductOptionVO> addOptionList = new ArrayList<ProductOptionVO>();
		
		nessOptionList = dao.getNessOptionList(vo.getProduct_code());
		addOptionList = dao.getAddOptionList(vo.getProduct_code());
		
		for(int i=0;i<nessOptionList.size();i++) {
			if(nessOptionMap.get(nessOptionList.get(i).getDepth()) != null) {
				nessOptionMap.get(nessOptionList.get(i).getDepth()).add(nessOptionList.get(i));
			}else {
				nessOptionMap.put(nessOptionList.get(i).getDepth(), new ArrayList<ProductOptionVO>());
				nessOptionMap.get(nessOptionList.get(i).getDepth()).add(nessOptionList.get(i));
			}
		}
		
		for(int i=0;i<addOptionList.size();i++) {
			if(addOptionMap.get(addOptionList.get(i).getDepth()) != null) {
				addOptionMap.get(addOptionList.get(i).getDepth()).add(addOptionList.get(i));
			}else {
				addOptionMap.put(addOptionList.get(i).getDepth(), new ArrayList<ProductOptionVO>());
				addOptionMap.get(addOptionList.get(i).getDepth()).add(addOptionList.get(i));
			}
		}
		
		VO.setStore(vo);
		VO.setProductImageList(imageList);
		VO.setEvent(event);
		VO.setNessOptionMap(nessOptionMap);
		VO.setAddOptionMap(addOptionMap);
		
		result.put("vo", VO);
		
		return result;
	}
}
