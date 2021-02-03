package com.dnalab.humanandlife.vo;

public class ProductProvisionVO {
	private String product_code;
	private String name;
	private String law;
	private String manufacturer;
	private String country;
	private String servicecenter;
	
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
	public String getLaw() {
		return law;
	}
	public void setLaw(String law) {
		this.law = law;
	}
	public String getManufacturer() {
		return manufacturer;
	}
	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getServicecenter() {
		return servicecenter;
	}
	public void setServicecenter(String servicecenter) {
		this.servicecenter = servicecenter;
	}
	
	@Override
	public String toString() {
		return "ProductProvisionVO [product_code=" + product_code + ", name=" + name + ", law=" + law
				+ ", manufacturer=" + manufacturer + ", country=" + country + ", servicecenter=" + servicecenter + "]";
	}
}
