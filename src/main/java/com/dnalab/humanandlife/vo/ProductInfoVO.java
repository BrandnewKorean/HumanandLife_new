package com.dnalab.humanandlife.vo;

public class ProductInfoVO {
	private String product_code;
	private String manufacturer;
	private String brand;
	private String model;
	private String origin;
	private String charact;
	private String func;
	private String kinds;
	private String receipt;
	private String afterservice;
	
	public String getProduct_code() {
		return product_code;
	}
	public void setProduct_code(String product_code) {
		this.product_code = product_code;
	}
	public String getManufacturer() {
		return manufacturer;
	}
	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getOrigin() {
		return origin;
	}
	public void setOrigin(String origin) {
		this.origin = origin;
	}
	public String getCharact() {
		return charact;
	}
	public void setCharact(String charact) {
		this.charact = charact;
	}
	public String getFunc() {
		return func;
	}
	public void setFunc(String func) {
		this.func = func;
	}
	public String getKinds() {
		return kinds;
	}
	public void setKinds(String kinds) {
		this.kinds = kinds;
	}
	public String getReceipt() {
		return receipt;
	}
	public void setReceipt(String receipt) {
		this.receipt = receipt;
	}
	public String getAfterservice() {
		return afterservice;
	}
	public void setAfterservice(String afterservice) {
		this.afterservice = afterservice;
	}
	@Override
	public String toString() {
		return "ProductInfoVO [product_code=" + product_code + ", manufacturer=" + manufacturer + ", brand=" + brand
				+ ", model=" + model + ", origin=" + origin + ", charact=" + charact + ", func=" + func + ", kinds="
				+ kinds + ", receipt=" + receipt + ", afterservice=" + afterservice + "]";
	}
}
