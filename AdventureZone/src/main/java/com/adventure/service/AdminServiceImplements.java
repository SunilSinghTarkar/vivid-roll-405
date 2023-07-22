package com.adventure.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adventure.exception.CustomerException;
import com.adventure.exception.NoRecordFoundException;
import com.adventure.model.Admin;
import com.adventure.model.Customer;
import com.adventure.repository.AdminRespository;


@Service
public class AdminServiceImplements implements AdminServiceInterface {

	@Autowired
	private AdminRespository adminRepositry;
	
	
	@Override
	public Admin rsegisterAdmin(Admin admin) {
		if(admin==null) throw new CustomerException("The Admin you have provided is null");
		Optional<Admin> ad = adminRepositry.findByEmail(admin.getEmail());
		if(ad.isPresent()) throw new CustomerException("Admin already exists");
		return adminRepositry.save(admin);
	}

	@Override
	public Admin updateAdmin(Integer adminId, Admin admin) {
		Admin ad = adminRepositry.findById(adminId).orElseThrow(() -> new NoRecordFoundException("No record found with the given id "+adminId));
		if(ad.isDeleted()==true) throw new CustomerException("Admin is deleted");

		ad.setAddress(admin.getAddress());
		ad.setMobNumber(admin.getMobNumber());
		return adminRepositry.save(ad);
	}

	@Override
	public void DeleteAdmin(Integer adminId) {
		Admin admin = adminRepositry.findById(adminId).orElseThrow(() -> new NoRecordFoundException("No record found with the given id "+adminId));
		if(admin.isDeleted()==true) throw new CustomerException("Admin is already deleted");
		admin.setDeleted(true);

	}

	@Override
	public List<Admin> viewAlladmin() {
		List<Admin> admin = adminRepositry.findAll();
		if(admin.isEmpty()) throw new NoRecordFoundException("Admin list is empty");
		return null;
	}

}
