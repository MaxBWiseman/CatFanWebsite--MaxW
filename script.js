function flash() {
    const text = document.getElementById('flashText');
    text.style.color = (text.style.color === 'red') ? 'green' : 'red';
}

setInterval(flash, 1000);