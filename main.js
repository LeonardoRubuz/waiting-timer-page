
window.onload = () => {
    let waitingTime = parseInt(document.getElementById("countdown").innerText)
    const timer = setInterval(
        () => {
            waitingTime --;
            document.getElementById("countdown").innerText = waitingTime
            
            if (waitingTime === 0) {
                clearInterval(timer);
                window.open("https://www.e-collecta.com/cardpay/donation/cancel/80", "_self")
            }

        }, 1000
        
    )
}