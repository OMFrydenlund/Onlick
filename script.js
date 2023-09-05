document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("myButton");
    const message = document.getElementById("message");

    button.addEventListener("click", function() {
        button.textContent = "Clicked!";
        message.textContent = "Button was clicked!";
    });
});