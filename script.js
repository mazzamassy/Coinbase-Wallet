// document.addEventListener("DOMContentLoaded", () => {
//     const footer = document.querySelector("footer");
//     const dismissButton = document.getElementById("dismissCookie");
//     const isDismissed = localStorage.getItem("cookieDismissed");
    
//     if (!isDismissed) {
//         // Mostra il footer con un ritardo di 1 secondo
//         setTimeout(() => {
//             footer.classList.remove("cookie-hidden");
//             footer.classList.add("cookie-visible");
//         }, 1000);
//     } else {
//         // Nascondi permanentemente se già accettato
//         footer.remove();
//     }

//     // Gestisci il click sul pulsante "Dismiss"
//     dismissButton.addEventListener("click", () => {
//         footer.classList.remove("cookie-visible");
//         footer.classList.add("cookie-hidden");
        
//         // Rimuovi il footer dopo l'animazione
//         setTimeout(() => {
//             footer.remove();
//         }, 600);
        
//         // Salva la preferenza nel localStorage
//         localStorage.setItem("cookieDismissed", "true");
//     });
// });

function scomparsaFooter(){
    const footer = document.querySelector("footer");
    const dismissButton = document.getElementById("dismissCookie");
    footer.remove();
    dismissButton.remove();
}


function openGoogleLogin() {
    const width = 400;
    const height = 640;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;

    const newWindow = window.open(
        "GoogleApp.html",
        "Google Login",
        `width=${width},height=${height},left=${left},top=${top},resizable=no,scrollbars=no,status=no`
    );

    // Attendi che la nuova finestra sia pronta e poi invia il comando per avviare il video
    // const interval = setInterval(() => {
    //     if (newWindow && newWindow.postMessage) {
    //         newWindow.postMessage("playVideo", "*");
    //         clearInterval(interval);
    //     }
    // }, 300);
}

