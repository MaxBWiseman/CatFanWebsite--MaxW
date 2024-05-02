function flash() {
    const text = document.getElementById('flashText');
    text.style.color = (text.style.color === 'blue') ? 'green' : 'orange';
}

setInterval(flash, 1000);