const end = new Date(`Dec 31, ${new Date().getUTCFullYear()} 23:59:59`).getTime();
document.getElementById("eventYear").innerHTML = new Date().getUTCFullYear();
function ElapsedTime() {
    const start = new Date().getTime();
    let elapsed = (end - start) / 1000;
    this.days = Math.floor(elapsed / (3600 * 24));
    elapsed -= this.days * 3600 * 24;
    this.hours = Math.floor(elapsed / 3600);
    elapsed -= this.hours * 3600;
    this.minutes = Math.floor(elapsed / 60);
    elapsed -= this.minutes * 60;
    this.seconds = Math.floor(elapsed);
}
setInterval(() => {
    const time = new ElapsedTime();
    document.querySelector(".days").innerHTML = time.days;
    document.querySelector(".hours").innerHTML = time.hours;
    document.querySelector(".minutes").innerHTML = time.minutes;
    document.querySelector(".seconds").innerHTML = time.seconds;
}, 1000);
