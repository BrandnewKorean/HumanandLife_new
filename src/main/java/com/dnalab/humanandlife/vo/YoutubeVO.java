package com.dnalab.humanandlife.vo;

public class YoutubeVO {
	private int seq;
	private String src;
	
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public String getSrc() {
		return src;
	}
	public void setSrc(String src) {
		this.src = src;
	}
	
	@Override
	public String toString() {
		return "YoutubeVO [seq=" + seq + ", src=" + src + "]";
	}
}
