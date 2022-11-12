const oneMinute = document.getElementById('1min');
const fiveMinutes = document.getElementById('5min');
const tenMinute = document.getElementById('10min');

const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let player = 0;
let isStopped = true;

let seconds = 0;
let minutes = 0;

let startedTime = localStorage.getItem("isStarted") 
                ? localStorage.getItem("isStarted") === "true"
                : false;

const audio = new Audio("./audio/finish.mp3");

function finish() {

}

if (localStorage.seconds) {
    seconds = parseInt(localStorage.seconds);
  } else {
    localStorage.setItem("seconds", 0);
  }
  if (localStorage.minutes) {
    minutes = parseInt(localStorage.minutes);
  } else {
    localStorage.setItem("minutes", 0);
  }


function TimeInputPrint(minutes, seconds) {
    let minute = parseInt(minutes),
        second = parseInt(seconds);

    if (minute < 10) {
        minutesInput.value = "0" + minute;
    } else {
        minutesInput.value = minute;
    }

    if (second < 10) {
        secondsInput.value = "0" + second;
    } else {
        secondsInput.value = second;
    }

    localStorage.seconds = second;
    localStorage.minutes = minute;

}

/*Основная ф-ия где происходит отчет времени*/
setInterval(() => {
    if(player > 0 && !isStopped) {
        TimeInputPrint(player/60, player%60)
        player--;       
    }
    else {
        /*если минуты и секунды === 0 то вызвать ф-ию Finish, которая завершает процесс, вызывает аудио и меняет цвет*/
    }
}, 1000)


/*Функция при нажатии на кнопку старт*/
const startTimer = () => {
    player = parseInt(secondsInput.value) + parseInt(minutesInput.value) *60;

    if (player !=0) {
        isStopped = false;
        startBtn.setAttribute('disabled', true);
        stopBtn.setAttribute('disabled', false);
        resetBtn.setAttribute('disabled', true);

        minutesInput.setAttribute('readOnly', true);
        secondsInput.setAttribute('readOnly', true);

        oneMinute.setAttribute('disabled', true);
        fiveMinutes.setAttribute('disabled', true);
        tenMinute.setAttribute('disabled', true);

        localStorage.setItem("isStarted", true);
        
    }
}

/*Ф-ия при нажатии на кнопку стоп*/  
const stopTimer = () => {
    localStorage.setItem("isStarted", false);
    isStopped = true;
    resetBtn.setAttribute('disabled', false);
    stopBtn.setAttribute('disabled', true);   
}

/*Ф-ия при нажатии на кнопку reset*/
function resetTimer() {

}

function harvestTime() {
    
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer());

/*oneMinute.addEventListener("click", harvestTime(1));
fiveMinutes.addEventListener("click", harvestTime(5));
tenMinute.addEventListener("click", harvestTime(10));*/