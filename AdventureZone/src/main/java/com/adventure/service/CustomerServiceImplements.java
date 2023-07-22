package com.adventure.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.adventure.exception.CustomerException;
import com.adventure.exception.NoRecordFoundException;
import com.adventure.model.Admin;
import com.adventure.model.Customer;
import com.adventure.repository.ActivityRespository;
import com.adventure.repository.AdminRespository;
import com.adventure.repository.CategoryRespository;
import com.adventure.repository.CustomerRespository;
import com.adventure.repository.TicketRespository;

@Service
public class CustomerServiceImplements implements CustomerServiceInterface {

	@Autowired
	private CustomerRespository customerRepositry;

	@Autowired
	private PasswordEncoder pe;

	@Override
	public Customer rsegisterCustomer(Customer customer) {

		if (customer == null)
			throw new CustomerException("The customer you have provided is null");
		Optional<Customer> cus = customerRepositry.FindByEmail(customer.getEmail());
		if (cus.isPresent())
			throw new CustomerException("Customer already exists");

		return customerRepositry.save(customer);
	}

	@Override
	public Customer updateCustomer(Integer customerId, Customer customer) {

		Customer cus = customerRepositry.findById(customerId)
				.orElseThrow(() -> new NoRecordFoundException("No record found with the given id " + customerId));
		if (cus.isDeleted() == true)
			throw new CustomerException("Customer is deleted");

		cus.setAddress(customer.getAddress());
		cus.setMobNumber(customer.getMobNumber());

		return customerRepositry.save(cus);
	}

	@Override
	public Customer DeleteCustomer(Integer customerId) {

		Customer cus = customerRepositry.findById(customerId)
				.orElseThrow(() -> new NoRecordFoundException("No record found with the given id " + customerId));
		if (cus.isDeleted() == true)
			throw new CustomerException("Customer is already deleted");
		cus.setDeleted(true);
		return cus;
	}

	@Override
	public List<Customer> viewAllcustomer() {

		List<Customer> customers = customerRepositry.findAll();
		if (customers.isEmpty())
			throw new NoRecordFoundException("Customer list is empty");

		return customers;
	}

	@Override
	public Customer validateCustomer(String username, String password) {

		if (username == null || password == null)
			throw new CustomerException("Invalid credentials");
		Customer customer = customerRepositry.FindByEmail(username).get();

		if (pe.matches(password, customer.getPassword())) {
			return customer;
		} else {
			throw new CustomerException("Invalid password");
		}

	}

	@Override
	public Customer viewCustomerById(Integer customerId) {
		Customer cus = customerRepositry.findById(customerId)
				.orElseThrow(() -> new NoRecordFoundException("No record found with the given id " + customerId));
		if (cus.isDeleted() == true)
			throw new CustomerException("No record found with the given id " + customerId);
		return cus;
	}

}
