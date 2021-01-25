package com.dnalab.humanandlife.vo;

public class ProductEventVO {
	private int seq;
	private String product_code;
	private String name;
	private String category;
	private String regdate;
	private String startdate;
	private String enddate;
	private boolean isstart;
	private boolean ispersent;
	private int persent;
	private int rounds;
	private boolean isdiscount;
	private int discount;
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
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
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getRegdate() {
		return regdate;
	}
	public void setRegdate(String regdate) {
		this.regdate = regdate;
	}
	public String getStartdate() {
		return startdate;
	}
	public void setStartdate(String startdate) {
		this.startdate = startdate;
	}
	public String getEnddate() {
		return enddate;
	}
	public void setEnddate(String enddate) {
		this.enddate = enddate;
	}
	public boolean isIsstart() {
		return isstart;
	}
	public void setIsstart(boolean isstart) {
		this.isstart = isstart;
	}
	public boolean isIspersent() {
		return ispersent;
	}
	public void setIspersent(boolean ispersent) {
		this.ispersent = ispersent;
	}
	public int getPersent() {
		return persent;
	}
	public void setPersent(int persent) {
		this.persent = persent;
	}
	public int getRounds() {
		return rounds;
	}
	public void setRounds(int rounds) {
		this.rounds = rounds;
	}
	public boolean isIsdiscount() {
		return isdiscount;
	}
	public void setIsdiscount(boolean isdiscount) {
		this.isdiscount = isdiscount;
	}
	public int getDiscount() {
		return discount;
	}
	public void setDiscount(int discount) {
		this.discount = discount;
	}

	@Override
	public String toString() {
		return "ProductEventVO [seq=" + seq + ", product_code=" + product_code + ", name=" + name + ", category="
				+ category + ", regdate=" + regdate + ", startdate=" + startdate + ", enddate=" + enddate + ", isstart="
				+ isstart + ", ispersent=" + ispersent + ", persent=" + persent + ", rounds=" + rounds + ", isdiscount="
				+ isdiscount + ", discount=" + discount + "]";
	}
}
