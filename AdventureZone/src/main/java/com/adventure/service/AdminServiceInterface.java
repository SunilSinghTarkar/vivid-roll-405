package com.adventure.service;

import java.util.List;

import com.adventure.model.Admin;

public interface AdminServiceInterface {
	
	public Admin rsegisterAdmin(Admin admin);
	public Admin updateAdmin(Integer adminId,Admin admin);
	public void DeleteAdmin(Integer adminId);
	public List<Admin> viewAlladmin();
	
}
