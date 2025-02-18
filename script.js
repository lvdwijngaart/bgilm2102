document.addEventListener("DOMContentLoaded", function () {
    // Hidden image in Origin Story
    const hiddenImage = document.getElementById("hiddenImage");
    const clueText = document.getElementById("clueText");

    if (hiddenImage) {
        hiddenImage.addEventListener("click", function () {
            clueText.style.display = "block";
        });

        clueText.addEventListener("click", function () {
            window.location.href = "clue1.html";
        });
    }

    // Hidden button in Trips
    const hiddenButton = document.getElementById("hiddenButton");
    if (hiddenButton) {
        hiddenButton.addEventListener("click", function () {
            alert("I have another surprise waiting for you... 😉");
        });
    }
});
