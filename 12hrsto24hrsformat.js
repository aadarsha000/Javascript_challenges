/* 
Write a function which can convert the time input given in 
12 hours format to 24 hours format
*/
const time = '5:00AM';

function convertTo24HrsFormat(time) {
    
   const [hours, minutes] = time.split(':');
   let min = minutes[0]+minutes[1];
   let hrs24=hours;
    if (hours=='12'){
        hrs24 = '00';
    }
    if(minutes[2]=='P'){
        hrs24 =Number(hrs24)+12;
    }
    if(hours[0]!='0'&& time[1]==":"){
        hrs24='0'+hrs24
    }
    return `${hrs24}:${min}`
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)