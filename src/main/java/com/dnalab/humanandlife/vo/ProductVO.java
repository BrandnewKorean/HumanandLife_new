package com.dnalab.humanandlife.vo;

public class ProductVO {
	private String product_code;
	private String name;
	private int price;
	private int count;
	private boolean isnew;
	private boolean iscolor;
	public String getProduct_code() {
		return product_code;
	}
	public void setProduct_code(String product_code) {
		this.product_code = product_code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public boolean isIsnew() {
		return isnew;
	}
	public void setIsnew(boolean isnew) {
		this.isnew = isnew;
	}
	public boolean isIscolor() {
		return iscolor;
	}
	public void setIscolor(boolean iscolor) {
		this.iscolor = iscolor;
	}
	@Override
	public String toString() {
		return "ProductVO [product_code=" + product_code + ", name=" + name + ", price=" + price + ", count=" + count
				+ ", isnew=" + isnew + ", iscolor=" + iscolor + "]";
	}
}
