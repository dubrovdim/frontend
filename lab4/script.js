// Завдання 1. Елементи №1 та №2 сторінки.
const firstElement = document.getElementById('student-name');
const secondElement = document.querySelector('.birth-info');

function changeColors(element) {
    const active = element.classList.toggle('active');
    element.querySelector('button').setAttribute('aria-pressed', String(active));
}

function enableColorChange(element) {
    element.addEventListener('click', () => changeColors(element));
}

enableColorChange(firstElement);
enableColorChange(secondElement);

// Завдання 2. Керування зображенням.
const image = document.getElementById('city-image');
const imageLink = document.getElementById('city-link');
const addButton = document.getElementById('add-image');
const increaseButton = document.getElementById('increase-image');
const decreaseButton = document.getElementById('decrease-image');
const removeButton = document.getElementById('remove-image');

const initialWidth = 720;
const step = 80;
const minWidth = 160;
const maxWidth = 1440;
let imageWidth = initialWidth;

function updateButtons() {
    const visible = image.isConnected;
    addButton.disabled = visible;
    increaseButton.disabled = !visible || imageWidth >= maxWidth;
    decreaseButton.disabled = !visible || imageWidth <= minWidth;
    removeButton.disabled = !visible;
}

function resizeImage(width) {
    imageWidth = Math.max(minWidth, Math.min(maxWidth, width));
    image.width = imageWidth;
    updateButtons();
}

addButton.addEventListener('click', () => {
    imageLink.append(image);
    imageLink.hidden = false;
    resizeImage(initialWidth);
});

increaseButton.addEventListener('click', () => resizeImage(imageWidth + step));
decreaseButton.addEventListener('click', () => resizeImage(imageWidth - step));

removeButton.addEventListener('click', () => {
    image.remove();
    imageLink.hidden = true;
    updateButtons();
});

updateButtons();
