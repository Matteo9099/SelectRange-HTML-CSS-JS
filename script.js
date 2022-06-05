// CHANGE BACKGROUND COLOR CARD
function changeColor() {
    let red = document.querySelector('.rangeRed').value;
    let green = document.querySelector('.rangeGreen').value;
    let blue = document.querySelector('.rangeBlue').value;
    let box = document.querySelector('.box');
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    box.style.backgroundColor = color;
    document.querySelector('.colorOutput').innerHTML = ': ' + color;

    document.querySelector('.reset').addEventListener('click', function() {
        document.querySelector('.colorOutput').innerHTML = 'rgb(6,12,33)';
        box.style.background = "#060c21";
    })
}

document.querySelector('.rangeRed').addEventListener('input', changeColor);
document.querySelector('.rangeGreen').addEventListener('input', changeColor);
document.querySelector('.rangeBlue').addEventListener('input', changeColor);



// CHANGE TEXT COLOR
function changeTextColor() {
    let text = document.getElementById('text');
    let rosso = document.querySelector('.textRed').value;
    let verde = document.querySelector('.textGreen').value;
    let blu = document.querySelector('.textBlue').value;
    let colore = 'rgb(' + rosso + ',' + verde + ',' + blu + ')';
    text.style.color = colore;
    document.querySelector('.textOutput').innerHTML = ': ' + colore;
    
    document.querySelector('.restart').addEventListener('click', function() {
        document.querySelector('.textOutput').innerHTML = 'rgb(255,255,255)';
        text.style.color = "#ffffff";

    })
}

document.querySelector('.textRed').addEventListener('input', changeTextColor);
document.querySelector('.textGreen').addEventListener('input', changeTextColor);
document.querySelector('.textBlue').addEventListener('input', changeTextColor);

