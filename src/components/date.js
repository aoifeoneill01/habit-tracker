const Week = () => {

    
    const d = new Date();

    const thisMonth = d.getMonth();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

 
    // Show Dates
    const thisDay = d.getDay();
    const todaysDate = d.getDate();
    console.log(thisDay);

    // Get Mondays Date
    const getMon = () => {

	if (thisDay > 1) {
	   return todaysDate - (thisDay - 1)
	} else if (thisDay < 1) {
		return todaysDate + 1
	} else if (thisDay === 1) {
		return todaysDate
	}
  }

    // Get Tuesdays Date
    const getTue = () => {

    if (thisDay > 2) {
        return todaysDate - (thisDay - 2)
     } else if (thisDay < 2) {
         return todaysDate + (2 - thisDay)
     } else if (thisDay === 2) {
         return todaysDate
     }
    }

    // Get Wedesdays Date
    const getWed = () => {

        if (thisDay > 3) {
           return todaysDate - (thisDay - 3)
        } else if (thisDay < 3) {
            return todaysDate + (3 - thisDay)
        } else if (thisDay === 3) {
            return todaysDate
        }
    }   

    // Get Thurs Date
    const getThur = () => {

        if (thisDay > 4) {
           return todaysDate - (thisDay - 4)
        } else if (thisDay < 4) {
            return todaysDate + (4 - thisDay)
        } else if (thisDay === 4) {
            return todaysDate
        }
      } 

    // Get Fridays Date
    const getFri = () => {

        if (thisDay > 5) {
           return todaysDate - (thisDay - 5)
        } else if (thisDay < 5) {
            return todaysDate + (5 - thisDay)
        } else if (thisDay === 5) {
            return todaysDate
        }
      } 

    // Get Saturdays Date
    const getSat = () => {

        if (thisDay > 6) {
           return todaysDate - (thisDay - 6)
        } else if (thisDay < 6) {
            return todaysDate + (6 - thisDay)
        } else if (thisDay === 6) {
            return todaysDate
        }
      } 

    // Get Sunday Date
    const getSun = () => {
        return getSat() + 1
      }                   



    return(
       <>
            <div className="month">
               <p><b>{months[thisMonth]}</b></p>
            </div>
            <div className={`${thisDay === 1 ? 'currentDay' : ''}`}>
               <p><b>{getMon()}</b></p>
               <p>Mon</p>
            </div>
           <div className={`${thisDay === 2 ? 'currentDay' : ''}`}>
               <p><b>{getTue()}</b></p>
               <p>Tue</p>
           </div>
           <div className={`${thisDay === 3 ? 'currentDay' : ''}`}>
               <p><b>{getWed()}</b></p>
               <p>Wed</p>
           </div>
           <div className={`${thisDay === 4 ? 'currentDay' : ''}`}>
               <p><b>{getThur()}</b></p>
               <p>Thur</p>
           </div>
           <div className={`${thisDay === 5 ? 'currentDay' : ''}`}> 
               <p><b>{getFri()}</b></p>
               <p>Fri</p>
           </div>
           <div className={`${thisDay === 6 ? 'currentDay' : ''}`}>
               <p><b>{getSat()}</b></p>
               <p>Sat</p>
           </div>
           <div className={`${thisDay === 0 ? 'currentDay' : ''}`}>
               <p><b>{getSun()}</b></p>
               <p>Sun</p>
           </div>
       </>
    )
}

export default Week;