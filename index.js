class CountdownTimer {

  constructor({ selector, targetDate }) {
    this.timerRef = document.querySelector(selector);
    this.daysRef = this.timerRef.querySelector('.value[data-value="days"]');
    this.hoursRef = this.timerRef.querySelector('.value[data-value="hours"]');
    this.minsRef = this.timerRef.querySelector('.value[data-value="mins"]');
    this.secsRef = this.timerRef.querySelector('.value[data-value="secs"]');
   
    // this.daysRef = this.timerRef.children[0].children[0];
    // this.hoursRef = this.timerRef.children[1].children[0];
    // this.minsRef = this.timerRef.children[2].children[0];
    // this.secsRef = this.timerRef.children[3].children[0];
    this.targetDate = targetDate;
   
  }
  

    intervalId = setInterval(() => {
      const startTime = Date.now();
      const time = this.targetDate - startTime;
      this.changeTime(time);
      
    }, 1000);
   
   
changeTime(time) {
  
const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  this.daysRef.textContent = `${days}`;
  this.hoursRef.textContent = `${hours}`;
  this.minsRef.textContent = `${mins}`;
  this.secsRef.textContent = `${secs}`;

    };

pad(value) {
  return String(value).padStart(2, '0');
  }
  
}

let futureDate = 'Dec 31, 2021';


const timerStart = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(futureDate),     // new Date('Jun 09, 2021'),

});



function dateCheck(a, b) {

  if (a < b) {
    console.log("future-date", futureDate);
    console.log("current-date", Date.now());
    alert("Выберите дату в будущем");
    return document.querySelector('#timer-1').textContent = 'Pls. choose the date in the future'; 
  } 
}

dateCheck(Date.parse(futureDate), Date.now());
 


//console.log(document.querySelector('#timer-1'))

// const x = Date.parse(futureDate);
// console.log('x', x);
// const y = Date(x);
// console.log(y);

// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = pad(Math.floor((time % (1000 * 60)) / 1000));