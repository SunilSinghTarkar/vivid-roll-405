package com.adventure.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.adventure.model.Ticket;
import com.adventure.service.TicketServiceImplements;

import jakarta.validation.Valid;

@RestController
public class TicketController {

	@Autowired
    private TicketServiceImplements ticService;
    
	/*
	 * public Ticket generateTicket(Ticket ticket);
		public Ticket updateTicket(Integer ticketId,Ticket ticket);
		public void DeleteTicket(Integer ticketId);
		public List<Ticket> viewAllticket();
		
	 * */
	
	@PostMapping("/booktickets")
	public ResponseEntity<Ticket> generateTicket(@Valid @RequestBody Ticket ticket){
		Ticket tic = ticService.generateTicket(ticket);
		return new ResponseEntity<Ticket>(tic,HttpStatus.CREATED);
	}
	
	
	@PutMapping("/tickets/{id}")
	public ResponseEntity<Ticket> updateTicket(@PathVariable Integer id, @RequestBody Ticket ticket){
		Ticket ticket1 = ticService.updateTicket(id, ticket);
		return new ResponseEntity<Ticket>(ticket1,HttpStatus.OK);
	}
    
	
	@DeleteMapping("/ticketsBy/{id}")
	public ResponseEntity<String> DeleteTicket(@PathVariable Integer id){
		ticService.DeleteTicket(id);
		return new ResponseEntity<String>("Deleted Ticket successfully",HttpStatus.OK);
	}
	
	@GetMapping("/allTickets")
	public ResponseEntity<List<Ticket>> viewAllTickets(){
		List<Ticket> viewAllticket = ticService.viewAllticket();
		return new ResponseEntity<List<Ticket>>(viewAllticket,HttpStatus.OK); 
	}
}
