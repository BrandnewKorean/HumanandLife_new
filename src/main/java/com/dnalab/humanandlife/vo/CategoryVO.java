package com.dnalab.humanandlife.vo;

public class CategoryVO {
	private int ord;
	private String main_category;
	private String sub_category;
	private String href;
	
	public int getOrd() {
		return ord;
	}
	public void setOrd(int ord) {
		this.ord = ord;
	}
	public String getMain_category() {
		return main_category;
	}
	public void setMain_category(String main_category) {
		this.main_category = main_category;
	}
	public String getSub_category() {
		return sub_category;
	}
	public void setSub_category(String sub_category) {
		this.sub_category = sub_category;
	}
	public String getHref() {
		return href;
	}
	public void setHref(String href) {
		this.href = href;
	}
	
	@Override
	public String toString() {
		return "CategoryVO [ord=" + ord + ", main_category=" + main_category + ", sub_category=" + sub_category
				+ ", href=" + href + "]";
	}
}
