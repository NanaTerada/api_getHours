'use strict'

{
    const windowImg = document.getElementById('windowImg');

    let hour = new Date().getHours();

    console.log(hour);

    if( hour >= 5 && hour < 12) {
        windowImg.src = 'img/hours00.png';
    }  else if( hour >= 12 && hour < 17) {
        windowImg.src = 'img/hours01.png';
    } else if( hour >= 17 && hour < 20) {
        windowImg.src = 'img/hours02.png';
    } else {

        windowImg.src = 'img/hours03.png';
    }

}