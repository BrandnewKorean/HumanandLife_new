package com.dnalab.humanandlife.vo;

public class HeaderBannerVO {
	private int seq;
	private String name;
	private String href;
	
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getHref() {
		return href;
	}
	public void setHref(String href) {
		this.href = href;
	}
	
	@Override
	public String toString() {
		return "HeaderBannerVO [seq=" + seq + ", name=" + name + ", href=" + href + "]";
	}
}
