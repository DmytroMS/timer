class CountdownTimer {

  constructor({ selector, targetDate }) {
    this.timerRef = document.querySelector(selector);
    this.daysRef = this.timerRef.children[0].children[0];
    this.hoursRef = this.timerRef.children[1].children[0];
    this.minsRef = this.timerRef.children[2].children[0];
    this.secsRef = this.timerRef.children[3].children[0];
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


new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sep 17, 2021'),

});





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