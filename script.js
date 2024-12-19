// const messages=document.createElement("div");
// messages.classList.add("bar");
// messages.innerHTML='for more information , dont did the button <button>Got it!</button>';
// messages.style.backgroundColor="#5ec576";
// document.querySelector(".header").append(messages);

// document.querySelectorAll(".nav__link").forEach(function(e){
//     e.addEventListener("click",function(el){
//         el.preventDefault();
//         const id=this.getAttribute("href");
//         console.log(id);
//         document.querySelector(id).scrollIntoView({
//             behavior:'smooth'
//         });
//     });
// });

// const h1=document.querySelector("h1");
// console.log(h1.querySelectorAll(".highlight"));

// console.log(h1.children)

// h1.firstElementChild.style.color='white';


const nav=document.querySelector('.nav');
const section1=document.getElementById('section--1');
const section2=document.getElementById('section--2');
const section3=document.getElementById('section--3');
const navLink=document.querySelectorAll(".nav__link");
const btnForLearn=document.querySelector(".btn--scroll-to");
const operation=document.querySelector(".operations__tab-container");
const tabs=document.querySelectorAll(".operations__tab");
tabContent=document.querySelectorAll(".operations__content");



const handleHover=function (e,opacity){
   if(e.target.classList.contains('nav__link')){
    const  link=e.target;
    const siblings=link.closest('.nav').querySelectorAll('.nav__link');
    const logo=link.closest('.nav').querySelector('img');

    siblings.forEach(element => {
        if(element!==link)element.style.opacity=opacity;
    });
    logo.style.opacity=opacity;

   }
}

nav.addEventListener('mouseover',function(e){
handleHover(e,0.5);
});
nav.addEventListener('mouseout',function(e){
    handleHover(e,1);
    });


// navLink.forEach(addEventListener("click",()=>{

// }))

navLink.forEach(function(e){
    e.addEventListener("click",function(el){
        el.preventDefault();
        console.log(el.target.getAttribute('href'));
        const id=el.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behaviour : 'smooth'});

    })
})

btnForLearn.addEventListener("click",function(e){
    e.preventDefault();
    section1.scrollIntoView({behaviour:'smooth'});
})


// ((btnForLearn.getBoundingClientRect().top+btnForLearn.getBoundingClientRect().height)< window.pageYOffset){
    
//     nav.classList.add("sticky");
    
// }

// console.log(nav.classList)

// console.log(nav.classList)

window.addEventListener("scroll",function(e){
    e.preventDefault();
    if((btnForLearn.getBoundingClientRect().top+btnForLearn.getBoundingClientRect().height)< window.pageYOffset){
    
    nav.classList.add("sticky");
    
}
else nav.classList.remove("sticky");

})


// operation.addEventListener('mouseover',function(e){
//     // e.preventDefault();
//     console.log(e.target);
// })

// console.log(operation)

// operation.forEach(function(e){
//     e.addEventListener("mouseover",function(el){
//         el.preventDefault();
//         console.log(el.target);
//         el.target.classList.add('operations__tab--active');
//     })
// })


operation.addEventListener('mouseover',function(e){
    const clicked=e.target.closest('.operations__tab');
    console.log(clicked);
    if(!clicked) return;

   tabs.forEach((t)=>{
    t.classList.remove('operations__tab--active');
   })
   tabContent.forEach((c)=>{
    c.classList.remove("operations__content--active");
   })

   clicked.classList.add('operations__tab--active');

   const it=clicked.dataset.tab;
   console.log(it);
   document.querySelector(`.operations__content--${it}`).classList.add('operations__content--active')


})

const btnOpenAccount=document.querySelectorAll('.btn--show-modal');
const modalWindow=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const closeModal=document.querySelector('.btn--close-modal')


btnOpenAccount.forEach(function(el){
    el.addEventListener('click',function(e){
        e.preventDefault();
        
        modalWindow.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
    
})

closeModal.addEventListener('click',function(e){
    e.preventDefault();
    
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
})


let currentIndex=1;
const slide=document.querySelectorAll('.slide');
let lengthSlide=slide.length;
console.log(lengthSlide);

const leftButton =document.querySelector('.slider__btn--left');
const rightButton =document.querySelector('.slider__btn--right');

// const dots=document.querySelector('.dots');
// const rootStyles = getComputedStyle(document.documentElement);
// const primaryColor = rootStyles.getPropertyValue('--color-primary').trim()

// const dot=document.createElement('p');
// dot.innerHTML=`<button style="background-color: ${primaryColor};" class='data_slide--1'></button>
// <button class='data_slide--2'>2</button>
// <button class='data_slide--3'>3 </button>`;

// dots.append(dot);
const dotContainer=document.querySelector('.dots');


const createDots=function(){
   slide.forEach(function(_,i){
    dotContainer.insertAdjacentHTML('beforeend',
        `<button class ="dots__dot" data-slide="${i}"></button>`
    )
   })
    
}

createDots();
const allNods=document.querySelectorAll('.dots__dot');
allNods.forEach((n)=>{
    if(n.dataset.slide==='0'){
        n.classList.add('dots__dot--active');
    }
})




leftButton.addEventListener('click',function(e){
    e.preventDefault();
    if(currentIndex>1 && currentIndex<4){
      document.querySelector(`.slide--${currentIndex}`).classList.add('hidden');
      allNods.forEach((z)=>{
        if(z.dataset.slide===`${currentIndex-1}`){
            z.classList.remove('dots__dot--active');
        }
      })
      currentIndex--;
      document.querySelector(`.slide--${currentIndex}`).classList.remove('hidden');
      allNods.forEach((z)=>{
        if(z.dataset.slide===`${currentIndex-1}`){
            z.classList.add('dots__dot--active');
        }
      })
    }
})


rightButton.addEventListener('click',function(e){
    e.preventDefault();
    if(currentIndex>0 && currentIndex<3){
      document.querySelector(`.slide--${currentIndex}`).classList.add('hidden');
      allNods.forEach((z)=>{
        if(z.dataset.slide===`${currentIndex-1}`){
            z.classList.remove('dots__dot--active');
        }
      })
      currentIndex++;
     
      document.querySelector(`.slide--${currentIndex}`).classList.remove('hidden');
      allNods.forEach((z)=>{
        if(z.dataset.slide===`${currentIndex-1}`){
            z.classList.add('dots__dot--active');
        }
      })
    }
})

document.querySelector(".login__account").addEventListener("click",function(e){
    e.preventDefault();
    window.location.href="login.html";
})



const imgLazy=document.querySelectorAll('img[data-src]');
const lazyCallback=function(entries,observe){
    const [entry]=entries;
    console.log(entry)

    if(!entry.isIntersecting) return;

    entry.target.src=entry.target.dataset.src;

    entry.target.addEventListener('load',function(){
        entry.target.classList.remove('lazy-img');
    })

    observe.unobserve(entry.target);



}

const observerLazy=new IntersectionObserver(lazyCallback,{
    root:null,
    threshold:0
})


imgLazy.forEach(imgLaz=>observerLazy.observe(imgLaz));


// Dots and add

