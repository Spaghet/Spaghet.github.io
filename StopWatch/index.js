var startButton, stopButton, resetButton, startTime, nowTime, timer, diff, enable,interval;
startButton = document.getElementById("start");
timer = document.getElementById('timer');
stopButton = document.getElementById('stop');
resetButton = document.getElementById("reset");
enable = true;

startButton.onclick = function(){
  enable = false;
  startButton.disabled = true;
  if(interval !== undefined){
    clearInterval(interval);
  }
  startTime = new Date();
  if(diff !== undefined && diff != null){
    startTime -= diff;
  }

  interval = setInterval(function(){
    var hour, minute, second, millisec;
    nowTime = new Date();
    diff = nowTime - startTime;
    hour = diff / 3600000;
    hour = Math.floor(hour);
    if(hour < 10){
      hour = "0" + hour;
    }
    minute = (diff%3600000)/60000%60;
    minute = Math.floor(minute);
    if(minute < 10){
      minute = "0" + minute;
    }
    second = (diff%216000000000)/1000%60;
    second = Math.floor(second);
    if(second < 10){
      second = "0" + second;
    }
    millisec = (diff % 216000000000000)%1000;

    if(millisec < 10){
      millisec = "00" + millisec;
    }else{
      if(millisec < 100){
        millisec = "0"+millisec;
      }
    }

    timer.innerHTML = hour + ":"+minute+":"+second+":"+millisec;

}, 1);
};

stopButton.onclick = function(){
  enable = true;
  startButton.disabled = false;
  clearInterval(interval);
};
resetButton.onclick = function(){
  timer.innerHTML = "00:00:00:000";
  startTime = new Date();
  diff = null;
};

window.addEventListener("keypress", function(event){
  switch(String.fromCharCode(event.which)){
    case " ":
    if(enable){
      startButton.click();
    }else{
      stopButton.click();
    }
    break;
    case "r":
    resetButton.click();
    break;
  }
});
