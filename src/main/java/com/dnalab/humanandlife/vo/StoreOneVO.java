package com.dnalab.humanandlife.vo;

import java.util.List;
import java.util.Map;

public class StoreOneVO {
	private StoreVO store;
	private List<ProductImageVO> productImageList;
	private ProductEventVO event;
	private Map<Integer, List<ProductOptionVO>> nessOptionMap;
	private Map<Integer, List<ProductOptionVO>> addOptionMap;
	
	public StoreVO getStore() {
		return store;
	}
	public void setStore(StoreVO store) {
		this.store = store;
	}
	public List<ProductImageVO> getProductImageList() {
		return productImageList;
	}
	public void setProductImageList(List<ProductImageVO> productImageList) {
		this.productImageList = productImageList;
	}
	public ProductEventVO getEvent() {
		return event;
	}
	public void setEvent(ProductEventVO event) {
		this.event = event;
	}
	public Map<Integer, List<ProductOptionVO>> getNessOptionMap() {
		return nessOptionMap;
	}
	public void setNessOptionMap(Map<Integer, List<ProductOptionVO>> nessOptionMap) {
		this.nessOptionMap = nessOptionMap;
	}
	public Map<Integer, List<ProductOptionVO>> getAddOptionMap() {
		return addOptionMap;
	}
	public void setAddOptionMap(Map<Integer, List<ProductOptionVO>> addOptionMap) {
		this.addOptionMap = addOptionMap;
	}
	
	@Override
	public String toString() {
		return "StoreOneVO [store=" + store + ", productImageList=" + productImageList + ", event=" + event
				+ ", nessOptionMap=" + nessOptionMap + ", addOptionMap=" + addOptionMap + "]";
	}
}
