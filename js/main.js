// TODO: Utilizar API de colorpicker
// TODO: Passar HTML Inline Styles para CSS
// TODO: Refactor

import pickr from './colorPicker.js';

const container = document.querySelector('#sketch');

let slider = document.querySelector('input');

let output = document.querySelector('label');
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;

    for (element of document.querySelectorAll('div')) {
        container.remove(element);
    }
    grid();
};

function grid() {
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;

    // ! ** 2 = ao quadrado = ^2
    for (let i = 0; i <= parseInt(slider.value) ** 2; i++) {
        const square = document.createElement('div');

        const randomColor = document.querySelector('#random');

        const blackColor = document.querySelector('#black');

        // Default color
        square.addEventListener('click', function () {
            square.style.backgroundColor = 'black';
        });

        // Random Color
        randomColor.addEventListener('click', function () {
            square.addEventListener('mouseover', function () {
                let red = Math.floor(Math.random() * 251);
                let green = Math.floor(Math.random() * 251);
                let blue = Math.floor(Math.random() * 251);
                square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            });
        });

        // Black Color
        blackColor.addEventListener('click', function () {
            square.addEventListener('mouseover', function () {
                square.style.backgroundColor = 'black';
            });
        });

        square.style.border = '1px solid black';
        container.append(square);
    }
}

grid();
