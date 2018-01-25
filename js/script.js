let trainingPlan = {
   goal: "Half marathon (13.1ml)",
   time: "4 weeks 3 days",
   weeks: [
      {
         status: "done",
         days: [
            {
               date: "24.05.2015",
               status: "done",
               statusText: "",
               title: "RUN 2 ml",
               description: "Today, kick off this week of training with ..."
            },
            {
               date: "25.05.2015",
               status: "done",
               statusText: "",
               title: "REST",
               description: "As your body adjust to your new training ..."
            },
            {
               date: "26.05.2015",
               status: "done",
               statusText: "",
               title: "WALK 5 ml",
               description: "Keep your warm-up week going with another ..."
            },
            {
               date: "20.05.2015",
               status: "done",
               statusText: "Skipped",
               title: "REST",
               description: "As your body adjust to your new training ..."
            },
            {
               date: "21.05.2015",
               status: "done",
               statusText: "Done on 20.05.2015",
               title: "REST",
               description: "As your body adjust to your new training ..."
            },
            {
               date: "22.05.2015",
               status: "done",
               statusText: "",
               title: "WALK 5 ml",
               description: "Keep your warm-up week going with another ..."
            }
         ]
      },

      {
         status: "current",
         days: [
            {
               date: "20.05.2015",
               status: "done",
               statusText: "Skipped",
               title: "REST",
               description: "As your body adjust to your new training ..."
            },
            {
               date: "21.05.2015",
               status: "done",
               statusText: "Done on 20.05.2015",
               title: "REST",
               description: "As your body adjust to your new training ..."
            },
            {
               date: "22.05.2015",
               status: "done",
               statusText: "",
               title: "WALK 5 ml",
               description: "Keep your warm-up week going with another ..."
            },
            {
               date: "24.05.2015",
               status: "current",
               statusText: "",
               title: "RUN 2 ml",
               description: "Today, kick off this week of training with ..."
            },
            {
               date: "25.05.2015",
               status: "pending",
               statusText: "",
               title: "REST",
               description: "As your body adjust to your new training ..."
            },
            {
               date: "26.05.2015",
               status: "pending",
               statusText: "",
               title: "WALK 5 ml",
               description: "Keep your warm-up week going with another ..."
            }
         ]
      },

      {
         status: "pending",
         days: [
            {
               date: "24.05.2015",
               status: "pending",
               statusText: "",
               title: "RUN 2 ml",
               description: "Today, kick off this week of training with ..."
            },
            {
               date: "25.05.2015",
               status: "pending",
               statusText: "",
               title: "REST",
               description: "As your body adjust to your new training ..."
            },
            {
               date: "26.05.2015",
               status: "pending",
               statusText: "",
               title: "WALK 5 ml",
               description: "Keep your warm-up week going with another ..."
            },
            {
               date: "20.05.2015",
               status: "pending",
               statusText: "",
               title: "REST",
               description: "As your body adjust to your new training ..."
            },
            {
               date: "21.05.2015",
               status: "pending",
               statusText: "",
               title: "REST",
               description: "As your body adjust to your new training ..."
            },
            {
               date: "22.05.2015",
               status: "pending",
               statusText: "",
               title: "WALK 5 ml",
               description: "Keep your warm-up week going with another ..."
            }
         ]
      },

      {
         status: "pending",
         days: [
            {
               date: "24.05.2015",
               status: "pending",
               statusText: "",
               title: "RUN 2 ml",
               description: "Today, kick off this week of training with ..."
            },
            {
               date: "25.05.2015",
               status: "pending",
               statusText: "",
               title: "REST",
               description: "As your body adjust to your new training ..."
            },
            {
               date: "26.05.2015",
               status: "pending",
               statusText: "",
               title: "WALK 5 ml",
               description: "Keep your warm-up week going with another ..."
            },
            {
               date: "20.05.2015",
               status: "pending",
               statusText: "",
               title: "REST",
               description: "As your body adjust to your new training ..."
            },
            {
               date: "21.05.2015",
               status: "pending",
               statusText: "",
               title: "REST",
               description: "As your body adjust to your new training ..."
            },
            {
               date: "22.05.2015",
               status: "pending",
               statusText: "",
               title: "WALK 5 ml",
               description: "Keep your warm-up week going with another ..."
            }
         ]
      }
   ]
};

let goalElement = document.getElementById('goal_placeholder');
if (goalElement)
   goalElement.innerText = trainingPlan.goal;
let timeElement = document.getElementById('time_placeholder');
if (timeElement)
   timeElement.innerText = trainingPlan.time;

let weeksElement = document.getElementById('weeks');
let swiper_wrapper = document.getElementById('days_wrapper');
if (swiper_wrapper && weeksElement) {
   let weeks = trainingPlan.weeks;
   for (let n = 0; n < weeks.length; n++) {
      let swiper_slide = document.createElement('div');
      swiper_slide.classList.add('swiper-slide');

      let weeksTextElement = document.createElement('div');
      weeksTextElement.classList.add('weeks_text');
      weeksTextElement.innerText = `WEEK ${n+1}`;
      swiper_slide.appendChild(weeksTextElement);

      let days_element = document.createElement('section');
      days_element.classList.add('days');
      swiper_slide.appendChild(days_element);

      let week = weeks[n];
      let weekStatus = week.status;

      let days = week.days;
      for (let i = 0; i < days.length; i++) {
         let day = days[i];

         let day_element = document.createElement('div');
         day_element.classList.add('day');
         day_element.classList.add(day.status);
         day_element.innerHTML = `
            <span class="day_date">${day.date}</span>
            <div class="day_mark"><div class="circle"></div></div>
            <span class="day_title">${day.title}</span>
            <span class="day_status_text">${day.statusText === "" ? day.status : day.statusText}</span>
            <span class="day_description">${day.description}</span>      
         `;
         days_element.appendChild(day_element);
         swiper_wrapper.appendChild(swiper_slide);
      }

      let weekItemElement = document.createElement('div');
      weekItemElement.classList.add('week_item');
      if (weekStatus === "current") {
         weekItemElement.classList.add('current');
         weekItemElement.classList.add('selected');
      }
      if (weekStatus === "pending")
         weekItemElement.classList.add('pending');
      weekItemElement.innerHTML = `
         <div class="week_mark"></div>
         <div class="week_number">${n+1}</div>      
      `;
      weeksElement.appendChild(weekItemElement);
   }
}

let mySwiper = new Swiper (".swiper-container", {
   direction: 'horizontal',
   loop: false,
   initialSlide: 1
});

//mySwiper.slideTo(2);

mySwiper.on('slideChange', function() {
   console.log(`Active: ${mySwiper.activeIndex}; Previous: ${mySwiper.previousIndex}`);

   weeksElement.children[this.previousIndex].classList.remove('selected');
   weeksElement.children[this.activeIndex].classList.add('selected');
});


function openMenu() {
   let menu = document.getElementById('left_panel');
   menu.classList.add('panel_open');
}

function closeMenu() {
   let menu = document.getElementById('left_panel');
   menu.classList.remove('panel_open');
}

let openButton = document.getElementById('openMenuButton');
openButton.addEventListener('click', openMenu);

let closeButton = document.getElementById('closeMenuButton');
closeButton.addEventListener('click', closeMenu);