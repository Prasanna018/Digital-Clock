let hr = document.getElementById("hr")
let min = document.getElementById("min")
let sec = document.getElementById("sec");
function time() {


    const date = new Date;

    hr.textContent = `${date.getHours()} Hours`;
    min.textContent = `${date.getMinutes()} Minutes`;

    sec.textContent = `${date.getSeconds()} Seconds`;
}



setInterval(time, 1000);