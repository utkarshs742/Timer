const form = document.querySelector('.formdata');

const countdownC = document.querySelector('.countdown-container');

const textdate = document.querySelector('.datetext');

countdownC.style.display = 'none';
form.addEventListener('submit', event => {
    event.preventDefault();
    countdownC.style.display = 'flex';
    const newYears = form.date.value;
    textdate.innerText =  `Time Remaining In ${newYears} Is `;
    form.reset();
    form.style.display = 'none';
const Idays = document.getElementById('days');
const Ihours = document.getElementById('hours');
const Iminutes = document.getElementById('minutes');
const Iseconds = document.getElementById('seconds');

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const seconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor((seconds / 3600 / 24 ))
    const hours = Math.floor(seconds/3600) % 24;
    const minutes = Math.floor(seconds/60) % 60;
    const sec = Math.floor(seconds % 60);
    
    Idays.innerHTML = days;
    Iminutes.innerHTML = minutes;
    Ihours.innerHTML = hours;
    Iseconds.innerHTML = sec;
   // console.log(months,days,hours,minutes,sec);
   
}
countdown();
setInterval(countdown,1000);

})
