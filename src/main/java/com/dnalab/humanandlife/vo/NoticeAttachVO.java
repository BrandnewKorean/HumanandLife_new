package com.dnalab.humanandlife.vo;

public class NoticeAttachVO {
	private int seq;
	private int ord;
	private String filename;
	int getSeq() {
		return seq;
	}
	void setSeq(int seq) {
		this.seq = seq;
	}
	int getOrd() {
		return ord;
	}
	void setOrd(int ord) {
		this.ord = ord;
	}
	String getFilename() {
		return filename;
	}
	void setFilename(String filename) {
		this.filename = filename;
	}
	@Override
	public String toString() {
		return "NoticeAttachVO [seq=" + seq + ", ord=" + ord + ", filename=" + filename + "]";
	}
}
