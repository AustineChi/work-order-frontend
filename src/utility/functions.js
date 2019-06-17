
export function checkStatus(val){
    if(val) {
         console.log("wicked", val.partName)
    } 
    else {
        let notFound = {}
        console.log("not found", notFound.partName) 
    }
  }