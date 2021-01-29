package com.dnalab.humanandlife.vo;

public class UserVO {
	private String email;
	private String password;
	private String phone;
	private String name;
	private String authority;
	private String joindate;
	private String recentaccess;
	private boolean recept_email;
	private boolean recept_sms;
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAuthority() {
		return authority;
	}
	public void setAuthority(String authority) {
		this.authority = authority;
	}
	public String getJoindate() {
		return joindate;
	}
	public void setJoindate(String joindate) {
		this.joindate = joindate;
	}
	public String getRecentaccess() {
		return recentaccess;
	}
	public void setRecentaccess(String recentaccess) {
		this.recentaccess = recentaccess;
	}
	public boolean isRecept_email() {
		return recept_email;
	}
	public void setRecept_email(boolean recept_email) {
		this.recept_email = recept_email;
	}
	public boolean isRecept_sms() {
		return recept_sms;
	}
	public void setRecept_sms(boolean recept_sms) {
		this.recept_sms = recept_sms;
	}
	
	@Override
	public String toString() {
		return "UserVO [email=" + email + ", password=" + password + ", phone=" + phone + ", name=" + name
				+ ", authority=" + authority + ", joindate=" + joindate + ", recentaccess=" + recentaccess
				+ ", recept_email=" + recept_email + ", recept_sms=" + recept_sms + "]";
	}
}
