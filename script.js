function flash() {
    const text = document.getElementById('flashText');
    text.style.color = (text.style.color === 'red') ? 'green' : 'red';
}

setInterval(flash, 1000);

/* code reasurched from https://www.bing.com/search?pglt=41&q=how+to+get+text+to+flash+different+colors+html+css&cvid=db48e436c54c4c8e9c163fea72130182&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDgwODZqMGoxqAIIsAIB&FORM=ANNTA1&PC=LCTS&showconv=1*/