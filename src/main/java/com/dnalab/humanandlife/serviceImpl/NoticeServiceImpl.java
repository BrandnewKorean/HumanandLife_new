package com.dnalab.humanandlife.serviceImpl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dnalab.humanandlife.dao.NoticeDAO;
import com.dnalab.humanandlife.service.NoticeService;
import com.dnalab.humanandlife.vo.NoticeVO;
import com.dnalab.humanandlife.vo.Search;

@Service
public class NoticeServiceImpl implements NoticeService{
	
	@Autowired
	NoticeDAO dao;

	@Override
	public Map<String, Object> getNoticeSearchList(Search search) {
		List<NoticeVO> list = new ArrayList<NoticeVO>();
		
		if(search.getKeyword() == null) search.setKeyword("");
		
		int totalRow = dao.getSearchTotalRow(search);
		
		search.setStartEnd();
		search.setTotalRow(totalRow);
		
		list = dao.searchList(search);
		
		Map<String, Object> notice = new HashMap<String, Object>();
		notice.put("search", search);
		notice.put("list", list);
		
		return notice;
	}

	@Override
	public NoticeVO getNotice(int seq) {
		return dao.selectOne(seq);
	}
}
