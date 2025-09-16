const btnLasagna = document.getElementById("btnLasagna");
const btnSpagetti = document.getElementById("btnSpagetti");
const btnmain = document.getElementById("btnMain");

if (btnLasagna) {
    btnLasagna.addEventListener('click', () => {
        window.location.href = "recipes/lasagna.html";
    });
}

if (btnSpagetti) {
    btnSpagetti.addEventListener('click', () => {
        window.location.href = "recipes/spagetti.html";
    });
}

if (btnMain) {
    btnMain.addEventListener('click', () => {
        window.location.href = "../index.html";
    });
}