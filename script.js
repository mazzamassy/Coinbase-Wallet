document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");
    const dismissButton = document.getElementById("dismissCookie");
    const isDismissed = localStorage.getItem("cookieDismissed");
    
    if (!isDismissed) {
        // Mostra il footer con un ritardo di 1 secondo
        setTimeout(() => {
            footer.classList.remove("cookie-hidden");
            footer.classList.add("cookie-visible");
        }, 1000);
    } else {
        // Nascondi permanentemente se già accettato
        footer.remove();
    }

    // Gestisci il click sul pulsante "Dismiss"
    dismissButton.addEventListener("click", () => {
        footer.classList.remove("cookie-visible");
        footer.classList.add("cookie-hidden");
        
        // Rimuovi il footer dopo l'animazione
        setTimeout(() => {
            footer.remove();
        }, 600);
        
        // Salva la preferenza nel localStorage
        localStorage.setItem("cookieDismissed", "true");
    });
});


function openGoogleLogin() {
    // const width = 360;
    // const height = 552;
        // const width = 365;
        // const height = 560;
            const width = 452.7;
            const height = 720;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;

    window.open(
        "GoogleApp.html",
        "Google Login",
        `width=${width},height=${height},left=${left},top=${top},resizable=no,scrollbars=no,status=no`
    );
}
