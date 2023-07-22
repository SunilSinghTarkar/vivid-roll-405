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

import com.adventure.model.Activity;
import com.adventure.service.ActivityServiceImplements;

import jakarta.validation.Valid;

@RestController
public class ActivityController {

    @Autowired
    private ActivityServiceImplements actService;
    
    @PostMapping("activities")
    public ResponseEntity<Activity> addNewActivity( @Valid @RequestBody Activity activity){
    	Activity act = actService.addActivity(activity);
    	return new ResponseEntity<Activity>(act,HttpStatus.ACCEPTED);
    }
    
    @PutMapping("/activities/{id}")
    public ResponseEntity<Activity> updateActivity(@RequestBody Activity activity, @PathVariable Integer id){
    	Activity activity1 = actService.updateActivity(id, activity);
    	return new ResponseEntity<Activity>(activity1,HttpStatus.OK);
    }
    
    @DeleteMapping("/activities/{id}")
    public ResponseEntity<String> deleteActivity(@PathVariable Integer Id){
    	actService.DeleteActivity(Id);
    	return new ResponseEntity<String>("Deleted Activity successfully",HttpStatus.OK);
    }
    
    @GetMapping("/activities")
    public ResponseEntity<List<Activity>> getAllActivity(){
    	List<Activity> activitiesList = actService.viewAllactivity();
    	return new ResponseEntity<List<Activity>>(activitiesList,HttpStatus.OK);
    }
}
