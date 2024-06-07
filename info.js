document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.product button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert("Added to cart: " + this.parentElement.querySelector('h3').innerText);
        });
    });
});
