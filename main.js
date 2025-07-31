const birthMonth = prompt(`Enter Birth Month (1-12)`);
const birthDate = prompt(`Enter Birth Date`);

const bgMusic = document.createElement(`audio`);
bgMusic.classList = `bgMusic`;
bgMusic.src =
`https://ia600303.us.archive.org/30/items/happy-birthday-instrumental/HAPPY%20BIRTHDAY%20INSTRUMENTAL.mp3`;
bgMusic.loop = true;
bgMusic.controls = true;
document.body.appendChild(bgMusic);

const countdown = document.createElement(`h1`);
countdown.classList = `countdown`;
countdown.innerText = `Loading...`;
countdown.style.marginTop = `10%`;
countdown.style.marginLeft = `0%`;
document.body.appendChild(countdown);


function mainloop(){
    setTimeout(()=>{
        const ms = 
        Math.floor(new Date(`${new Date().getFullYear()}-${birthMonth}-${birthDate}`)
        .getTime() - Date.now());
        let seconds = ms/1000;
        let minutes = seconds/60;
        seconds %= 60;
        let hours = minutes/60;
        minutes %= 60;
        const days = hours/24;
        hours %= 24;
        const result = `Birthday Countdown!
        Days: ${Math.floor(days)}
        Hours: ${Math.floor(hours)}
        Minutes: ${Math.floor(minutes)}
        Seconds: ${Math.floor(seconds)}`;
        countdown.innerText = result;
        if(days > 0){
        mainloop();
        }
        else {
            countdown.innerText = `Ended!`;
        }
    }, 250)


}
mainloop();