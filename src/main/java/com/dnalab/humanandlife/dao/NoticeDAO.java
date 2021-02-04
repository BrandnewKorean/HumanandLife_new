package com.dnalab.humanandlife.dao;

import java.util.List;

import com.dnalab.humanandlife.vo.NoticeAttachVO;
import com.dnalab.humanandlife.vo.NoticeVO;
import com.dnalab.humanandlife.vo.Search;

public interface NoticeDAO {
	List<NoticeVO> searchList(Search search);
	int getSearchTotalRow(Search search);
	NoticeVO selectOne(int seq);
	List<NoticeAttachVO> getAttachList(int seq);
}
