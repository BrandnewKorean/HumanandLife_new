package com.dnalab.humanandlife.dao;

import java.util.List;

import com.dnalab.humanandlife.vo.BannerVO;
import com.dnalab.humanandlife.vo.CategoryVO;
import com.dnalab.humanandlife.vo.HeaderBannerVO;
import com.dnalab.humanandlife.vo.YoutubeVO;

public interface LayoutDAO {
	List<BannerVO> getBannerList(BannerVO vo);
	List<CategoryVO> getCategoryList();
	List<HeaderBannerVO> getHeaderBannerList();
	YoutubeVO getYoutube();
}
