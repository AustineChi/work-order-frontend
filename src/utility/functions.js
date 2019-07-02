
export function checkStatus(val){
    if(val) {
         console.log("wicked", val.partName)
    } 
    else {
        let notFound = {}
        console.log("not found", notFound.partName) 
    }
  }

  export function getTimeFromObjectID( id ){
    const timehex = id.slice(0,8);
    // convert to a number... base 16
    const secondsSinceEpoch = parseInt(timehex, 16);    
    // convert to milliseconds, and create a new date
    const dt = new Date(secondsSinceEpoch*1000);
    return dt
  }