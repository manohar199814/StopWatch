const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const tens = document.querySelector('.tens');
const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes')

let milliSeconds = 0;
let secondsTime = 0;
let minutesTime = 0;
let id  = null;

//start the watch
startBtn.addEventListener('click',function() {
        // if already started check if interval is present
        // dont add listeners again
        if(id) {
            return;
        }
        //call handleTime function for every 100 milli secnds
        id = setInterval(handleTime,100);
        console.log(id);
});

//stop watch if button is pressed
stopBtn.addEventListener('click',function() {
    clearInterval(id);
    id=null;
});

//reset values
resetBtn.addEventListener('click',function() {
    clearInterval(id);
    id=null;
    tens.innerHTML = '00';
    seconds.innerHTML ='00';
    minutes.innerHTML = '00';
    milliSeconds = 0;
    secondsTime = 0;
    minutesTime = 0;
});

//main logic 
function handleTime() {
    // Upadte milli seconds by 10 
    // this is called for very 100ms so if we update by 10 
    //for every 10 calls this updates to 100 so 1 second is done
    milliSeconds += 10;
    if(milliSeconds >= 99){
        milliSeconds = 0;
        secondsTime += 1;
        seconds.innerHTML = secondsTime >= 10 ? `${secondsTime}` : `0${secondsTime}`;
    }
    //for every 60 seconds update add 1 to minutes
    if(secondsTime > 59){
        secondsTime = 0;
        minutesTime +=1;
        seconds.innerHTML = '00';
        minutes.innerHTML = minutesTime>=10 ? `${minutesTime}` : `0${minutesTime}`;
    }
    tens.innerHTML = milliSeconds >= 10 ? `${milliSeconds}` :`0${milliSeconds}`;
}