const button = document.getElementById("button");
        button.addEventListener("click", () => {
            button.style.transition = "opacity 0.5s ease";
            button.style.opacity = "0";
            setTimeout(() => {
                window.location.href = "Langganan.html";
            }, 500);
        });