
function differDays({selectedDate}) {
    const currentDate = new Date();
    const selDate = new Date({selectedDate});
    const diffTime = Math.abs(selDate - currentDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    let diffDaysOut = "0"

    if(selDate > currentDate){
      diffDaysOut = diffDays;
    }else{
      if(diffDays=="1"){
        diffDaysOut = "0"
      }else{
        diffDaysOut = "-"+diffDays
      }
    }
    console.log(diffDaysOut + " ------------------days"); 
}

export default differDays