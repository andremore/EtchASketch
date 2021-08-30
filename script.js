// TODO: Utilizar API de colorpicker
// TODO: Passar HTML Inline Styles para CSS
// TODO: Refactor

const container = document.querySelector('#sketch');

const slider = document.querySelector('input');

let output = document.querySelector('label');
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;

    for (element of document.querySelectorAll('div')) {
        container.removeChild(element);
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
        square.addEventListener('mouseover', function () {
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

        container.append(square);
    }
}

grid();

const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'nano', // or 'monolith', or 'nano',
    closeOnScroll: false,

    // swatches: [
    //     'rgba(244, 67, 54, 1)',
    //     'rgba(233, 30, 99, 0.95)',
    //     'rgba(156, 39, 176, 0.9)',
    //     'rgba(103, 58, 183, 0.85)',
    //     'rgba(63, 81, 181, 0.8)',
    //     'rgba(33, 150, 243, 0.75)',
    //     'rgba(3, 169, 244, 0.7)',
    //     'rgba(0, 188, 212, 0.7)',
    //     'rgba(0, 150, 136, 0.75)',
    //     'rgba(76, 175, 80, 0.8)',
    //     'rgba(139, 195, 74, 0.85)',
    //     'rgba(205, 220, 57, 0.9)',
    //     'rgba(255, 235, 59, 0.95)',
    //     'rgba(255, 193, 7, 1)',
    // ],

    components: {
        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true,
        },
    },
});
