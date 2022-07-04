function showTime(){
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h === 0){
        h=12;
    }

    if (h > 12){
        h= h-12;
        session = "PM";
    }
    h= (h > 10) ? h : `0${h}`;
    m= (m > 10) ? m : `0${m}`;
    s= (s > 10) ? s : `0${s}`;
    
    time = `${h}:${m}:${s}  ${session}`;
    
    document.querySelector(".clock").innerHTML = time;
}

setInterval(showTime, 1000);