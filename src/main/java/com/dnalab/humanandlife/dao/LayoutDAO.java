package com.dnalab.humanandlife.dao;

import java.util.List;

import com.dnalab.humanandlife.vo.BannerVO;

public interface LayoutDAO {
	List<BannerVO> getBannerList(BannerVO vo);
}
