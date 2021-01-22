package com.dnalab.humanandlife.service;

import java.util.Map;

import com.dnalab.humanandlife.vo.Search;

public interface StoreService {
	public Map<String, Object> getMainList(Search search);
}
