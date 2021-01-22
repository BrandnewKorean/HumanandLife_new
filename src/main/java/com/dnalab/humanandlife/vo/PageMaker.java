package com.dnalab.humanandlife.vo;

public class PageMaker {
	private int currPage;
	private int perPage;
	private int start;
	private int end;
	private int totalRow;
	private int startPage;
	private int endPage;
	private boolean prev;
	private boolean next;
	private int displayPage=5;
	private int lastPage;
	
	public PageMaker() {
		this.currPage=1;
	}

	public int getCurrPage() {
		return currPage;
	}

	public void setCurrPage(int currPage) {
		if(currPage<1) currPage = 1;
		this.currPage = currPage;
	}

	public int getPerPage() {
		return perPage;
	}

	public void setPerPage(int perPage) {
		if(perPage < 1 || perPage > 100) perPage = 8;
		this.perPage = perPage;
	}
	
	public void setStartEnd() {
		if(start < 0) start = 0;
		start = (currPage-1)*perPage;
		end = start + perPage - 1;
	}

	public int getStart() {
		return start;
	}

	public int getEnd() {
		return end;
	}
	
	public int getTotalRow() {
		return totalRow;
	}
	
	public void setTotalRow(int totalRow) {
		this.totalRow = totalRow;
		calcData();
	}
	
	public void calcData() {
		startPage = getCurrPage()-(displayPage/2) <= 1 ? 1 : getCurrPage()-(displayPage/2);
		
		lastPage = (int)Math.ceil(totalRow/(double)getPerPage());
		
		endPage = getCurrPage()+(displayPage/2) > lastPage ? lastPage : getCurrPage()+(displayPage/2);
		
		if(endPage > lastPage) endPage = lastPage;
		prev = startPage == 1 ? false : true;
		next = endPage == lastPage ? false : true;
	}
	
	public int getStartPage() {
		return startPage;
	}

	public void setStartPage(int startPage) {
		this.startPage = startPage;
	}

	public int getEndPage() {
		return endPage;
	}

	public void setEndPage(int endPage) {
		this.endPage = endPage;
	}

	public boolean isPrev() {
		return prev;
	}

	public void setPrev(boolean prev) {
		this.prev = prev;
	}

	public boolean isNext() {
		return next;
	}

	public void setNext(boolean next) {
		this.next = next;
	}

	public int getDisplayPage() {
		return displayPage;
	}

	public void setDisplayPage(int displayPage) {
		this.displayPage = displayPage;
	}

	public int getLastPage() {
		return lastPage;
	}

	public void setLastPage(int lastPage) {
		this.lastPage = lastPage;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public void setEnd(int end) {
		this.end = end;
	}

	@Override
	public String toString() {
		return "PageMaker [currPage=" + currPage + ", perPage=" + perPage + ", start=" + start + ", end=" + end + "]";
	}
}
