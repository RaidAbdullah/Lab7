document.addEventListener('DOMContentLoaded', function () {
    const colorHeading = document.getElementById('color-heading');
    const colorInput = document.getElementById('color-input');
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const newColor = colorInput.value;
        colorHeading.style.color = newColor;
        colorInput.value = ''; // Clear the input field
    });
});

