import * as actionTypes from '../actions/actionsTypes';

const initialState = {
}

const reducer = (state=initialState, action) => {

	switch(action.type){

		case actionTypes.FETCH_BUSINESSDATA_BEGIN:
			alert('das')
				let newState14 = Object.assign({}, state);
				newState14.loading = true;
				return newState14;

		case actionTypes.FETCH_BUSINESSDATA_SUCCESS:
				alert('from reducer success')
				let newState15 = Object.assign({}, state);				 	
				let idOfBusinesses = Object.keys(action.userBusinesses.businesses);
				let newBusinessDataObj = {};
				newState15.business = [];
				for(let i = 0; i<idOfBusinesses.length; i++){
					let currentBusiness = action.userBusinesses.businesses[idOfBusinesses[i]];	
				newBusinessDataObj = {
					id: idOfBusinesses[i],
					title: currentBusiness.title,
					totalHours: {
      				  hours: currentBusiness.totalHours.hours,
      				  minutes: currentBusiness.totalHours.minutes
      				},
					goalHours: currentBusiness.goals.goalHours,
      				daylyGoal: {
      				  hours: currentBusiness.goals.daylyGoal.hours,
      				  minutes: currentBusiness.goals.daylyGoal.minutes
      				},			
      				weeklyGoal: {
      				  hours: currentBusiness.goals.weeklyGoal.hours,
      				  minutes: currentBusiness.goals.weeklyGoal.minutes
      				},
      				monthlyGoal:{
      					hours: currentBusiness.goals.monthlyGoal.hours,
      					minutes: currentBusiness.goals.monthlyGoal.minutes
      				},
					description: currentBusiness.description,
					progress: currentBusiness.progress,

				isShown: false,
				stopWatchIsShown: false,
					
      				currentStopwatchTime: {
						hours: '00',
						minutes: '00',
						seconds: '00',
						centiseconds: '00'
					},
      				timerTime: 0,
      				timerStart: 0,
      				timerId: null,
      				timerOn: false,
					}						
					newState15.business.push(newBusinessDataObj)
				}

				newState15.business[0].isShown = true;
				newState15.business[0].stopWatchIsShown = true;


				newState15.loading = false;
				return newState15;

export default reducer;