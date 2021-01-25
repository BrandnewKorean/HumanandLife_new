package com.dnalab.humanandlife.vo;

import java.util.List;
import java.util.Map;

public class StoreContentVO{
	private List<StoreVO> storeList;
	private Map<String,List<ProductImageVO>> productImageMap;
	private List<ProductEventVO> eventList;
	
	public List<StoreVO> getStoreList() {
		return storeList;
	}
	public void setStoreList(List<StoreVO> storeList) {
		this.storeList = storeList;
	}
	public Map<String, List<ProductImageVO>> getProductImageMap() {
		return productImageMap;
	}
	public void setProductImageMap(Map<String, List<ProductImageVO>> productImageMap) {
		this.productImageMap = productImageMap;
	}
	public List<ProductEventVO> getEventList() {
		return eventList;
	}
	public void setEventList(List<ProductEventVO> eventList) {
		this.eventList = eventList;
	}
	
	@Override
	public String toString() {
		return "StoreContentVO [storeList=" + storeList + ", productImageMap=" + productImageMap + ", eventList="
				+ eventList + "]";
	}
}
