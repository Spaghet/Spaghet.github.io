var plus, minus, go, count, timer, puase, clear;
plus = document.getElementsByName("plus");
minus = document.getElementsByName("minus");
go = document.getElementsByName("go");
count = document.getElementById("count");
timer = document.getElementById("timer");
pause = document.getElementsByName("pause")[0];
clear = document.getElementsByName("clear")[0];
var i = 0;
var temp, remaining;
var interval;
plus[0].onclick = function(){
  i+= 5;
  temp = i*60000;
  count.innerHTML = ""+i;
};
minus[0].onclick = function(){
  i-=5;
  temp = i*60000;
  if(i < 0){
    i=0;
  }
  count.innerHTML = ""+i;
};
go[0].onclick = function(){
  go[0].disabled = true;

   remaining = temp;
  var
  now = new Date(),
  base = new Date(),
  iterator = function(){
    if(remaining < 0){
      go[0].disabled = false;
      clearInterval(interval);
      timer.innerHTML = "00:00:000";
      alert("Time's up!");
      return;
    }
    base = now;
    now = new Date();
    remaining += (base - now);
    var minute, second, millisec;


    minute = remaining/60000;
    minute = Math.floor(minute);
    if(minute < 10){
      minute = "0" + minute;
    }
    second = (remaining%3600000)/1000%60;
    second = Math.floor(second);
    if(second < 10){
      second = "0" + second;
    }
    millisec = (remaining % 3600000000)%1000;

    if(millisec < 10){
      millisec = "00" + millisec;
    }else{
      if(millisec < 100){
        millisec = "0"+millisec;
      }
    }

        timer.innerHTML = minute+":"+second+":"+millisec;
  };
interval = setInterval(iterator, 1);
};

pause.onclick = function(){
  go[0].disabled = false;
  clearInterval(interval);
    temp = remaining;
};
clear.onclick = function(){
  go[0].disabled = false;
  clearInterval(interval);
  temp = i*60000;
  timer.innerHTML = "00:00:000";
};
