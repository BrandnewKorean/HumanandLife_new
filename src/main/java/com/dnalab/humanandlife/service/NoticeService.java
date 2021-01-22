package com.dnalab.humanandlife.service;

import java.util.Map;

import com.dnalab.humanandlife.vo.NoticeVO;
import com.dnalab.humanandlife.vo.Search;

public interface NoticeService {
	Map<String, Object> getNoticeSearchList(Search search);
	NoticeVO getNotice(int seq);
}
