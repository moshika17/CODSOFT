document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".btn");

    btn.addEventListener("mouseover", () => {
        btn.style.transform = "scale(1.1)";
    });

    btn.addEventListener("mouseout", () => {
        btn.style.transform = "scale(1)";
    });

    console.log("Fashion Landing Page Loaded!");
});
