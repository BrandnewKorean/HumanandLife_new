package com.dnalab.humanandlife.vo;

public class ProductOptionVO {
	private String product_code;
	private int depth;
	private String name;
	private int price_plus;
	private boolean additional;
	private String option_name;
	
	public String getProduct_code() {
		return product_code;
	}
	public void setProduct_code(String product_code) {
		this.product_code = product_code;
	}
	public int getDepth() {
		return depth;
	}
	public void setDepth(int depth) {
		this.depth = depth;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPrice_plus() {
		return price_plus;
	}
	public void setPrice_plus(int price_plus) {
		this.price_plus = price_plus;
	}
	public boolean isAdditional() {
		return additional;
	}
	public void setAdditional(boolean additional) {
		this.additional = additional;
	}
	public String getOption_name() {
		return option_name;
	}
	public void setOption_name(String option_name) {
		this.option_name = option_name;
	}
	@Override
	public String toString() {
		return "ProductOptionVO [product_code=" + product_code + ", depth=" + depth + ", name=" + name + ", price_plus="
				+ price_plus + ", additional=" + additional + ", option_name=" + option_name + "]";
	}
}
