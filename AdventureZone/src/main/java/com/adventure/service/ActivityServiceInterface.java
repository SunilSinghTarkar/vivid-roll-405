package com.adventure.service;

import java.util.List;

import com.adventure.model.Activity;

public interface ActivityServiceInterface {

	
	public Activity addActivity(Activity activity);
	public Activity updateActivity(Integer activityId,Activity activity);
	public void DeleteActivity(Integer activityId);
	public List<Activity> viewAllactivity();
	
}
