setInterval(()=> {
    d= new Date(); //By Date is like a Class in JS of which we have created a new instance method which will give us the current date.//
    htime= d.getHours(); // Through the date method we will get current time as hours, minutes, seconds.// 
    mtime= d.getMinutes();
    stime= d.getSeconds();

    hrotation= 30*htime+ mtime/2; // we need to be get that values by doing some mathematics.//
    mrotatition= 6*mtime;
    srotatition= 6*stime;

    //Now we will apply the rotaion values to the hands elements by using the .style property to apply CSS to the elements and rotate them accordingly.//
    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotatition}deg)`;
    sec.style.transform = `rotate(${srotatition}deg)`;
    // But they will be rotate from the center so to reaolve that we will add an CSS property to them at css which is 'transform-origin' as center.//
}, 1000);