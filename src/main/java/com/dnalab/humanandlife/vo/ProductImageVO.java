package com.dnalab.humanandlife.vo;

public class ProductImageVO {
	private String product_code;
	private String color;
	private int ord;
	private String filename;
	public String getProduct_code() {
		return product_code;
	}
	public void setProduct_code(String product_code) {
		this.product_code = product_code;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public int getOrd() {
		return ord;
	}
	public void setOrd(int ord) {
		this.ord = ord;
	}
	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	}
	@Override
	public String toString() {
		return "ProductImageVO [product_code=" + product_code + ", color=" + color + ", ord=" + ord + ", filename="
				+ filename + "]";
	}
}
