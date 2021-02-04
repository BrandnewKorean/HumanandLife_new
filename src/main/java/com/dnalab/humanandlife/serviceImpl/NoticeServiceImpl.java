package com.dnalab.humanandlife.serviceImpl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dnalab.humanandlife.dao.NoticeDAO;
import com.dnalab.humanandlife.service.NoticeService;
import com.dnalab.humanandlife.vo.NoticeAttachVO;
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
	public Map<String,Object> getNotice(int currPage, int seq, Search search) {
		Map<String ,Object> result = new HashMap<String, Object>();
		
		search.setCurrPage(currPage);
		if(search.getKeyword() == null) search.setKeyword("");
		
		int totalRow = dao.getSearchTotalRow(search);
		
		search.setTotalRow(totalRow);
		
		NoticeVO current = new NoticeVO();
		NoticeVO back = new NoticeVO();
		NoticeVO front = new NoticeVO();
		
		current = dao.selectOne(seq);
		back = dao.selectOne(seq+1);
		front = dao.selectOne(seq-1);
		
		List<NoticeAttachVO> list = new ArrayList<NoticeAttachVO>();
		
		list = dao.getAttachList(seq);
		
		result.put("search", search);
		result.put("current", current);
		result.put("back", back);
		result.put("front", front);
		result.put("attach", list);
		
		return result;
	}
}
