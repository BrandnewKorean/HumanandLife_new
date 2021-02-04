package com.dnalab.humanandlife.service;

import java.util.Map;

import com.dnalab.humanandlife.vo.Search;

public interface NoticeService {
	Map<String, Object> getNoticeSearchList(Search search);
	Map<String, Object> getNotice(int currPage, int seq, Search search);
}
