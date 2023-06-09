
// generate 12 columns
const container = document.querySelector('.bg-column');

for (let i = 1; i <= 12; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    column.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
    container.appendChild(column);
}


// type writer effect
var i = 0;
var txtA = document.querySelector('.paragraph:nth-child(1)').innerHTML;
document.querySelector('.paragraph:nth-child(1)').innerHTML = '';
var speed = 50;

function typeWriter() {
    if (i < txtA.length) {
        document.querySelector('.paragraph:nth-child(1)').innerHTML += txtA.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();


// circle animation
const circle = document.querySelectorAll('.circle');

circle.forEach((circle) => {
    circle.addEventListener('mouseenter', () => {
        circle.style.transform = 'scale(1.2)';
    });

    circle.addEventListener('mouseleave', () => {
        circle.style.transform = 'scale(1)';
    });
});


// column animation
const columns = document.querySelectorAll('.column');

for (let i = 0; i < columns.length; i++) {
    const column = columns[i];

    if (i < 6) {
        column.style.transform = 'translateY(100%)';
    } else {
        column.style.transform = 'translateY(-100%)';
    }
}

setTimeout(() => {
    for (let i = 0; i < columns.length; i++) {
        const column = columns[i];
        if (i < 6) {
            column.style.transform = 'translateY(0)';
        } else {
            column.style.transform = 'translateY(0)';
        }
    }
}, 1000);


