package com.dnalab.humanandlife.vo;

public class BannerVO {
	private String banner_id;
	private int ord;
	private String filename;
	private int speed;
	private String banner_name;
	private String href;
	
	public String getBanner_id() {
		return banner_id;
	}
	public void setBanner_id(String banner_id) {
		this.banner_id = banner_id;
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
	public int getSpeed() {
		return speed;
	}
	public void setSpeed(int speed) {
		this.speed = speed;
	}
	public String getBanner_name() {
		return banner_name;
	}
	public void setBanner_name(String banner_name) {
		this.banner_name = banner_name;
	}
	public String getHref() {
		return href;
	}
	public void setHref(String href) {
		this.href = href;
	}
	
	@Override
	public String toString() {
		return "BannerVO [banner_id=" + banner_id + ", ord=" + ord + ", filename=" + filename + ", speed=" + speed
				+ ", banner_name=" + banner_name + ", href=" + href + "]";
	}
}
