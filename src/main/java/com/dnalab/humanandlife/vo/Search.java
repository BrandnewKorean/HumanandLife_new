package com.dnalab.humanandlife.vo;

public class Search extends PageMaker{
	private String keyword;

	public String getKeyword() {
		return keyword;
	}

	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}

	@Override
	public String toString() {
		return "Search [keyword=" + keyword + "]";
	}
}