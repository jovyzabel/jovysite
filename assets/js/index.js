
let profil = document.querySelector('.ahead');
let appear = document.querySelectorAll('.appear');
let backCircle = document.querySelector('.circle');
let icon = document.getElementsByTagName('ion-icon');

window.addEventListener('DOMContentLoaded', (e)=>{
    profil.animate([
        {transform: "translateX(-745px)"},
        {transform: "translateY(0px)"},
    ],
    {
        duration: 1500,
        iterations: 1,
        easing: 'ease',
        

    }
)
})

// setTimeout(()=>{
// console.log('faire apparaitre Jovy Monka Fullstack developer');

// }, 2000)


    let elt = document.querySelector('.elt') ;
    for (let i = 0; i < 3; i++) {        
        appear[i].style.display ='block';       
    }
//     elt.animate([
//         {transform: "translateX(-745px)"},
//         {transform: "translateY(0px)"},
//     ],
//     {
//         duration: 1000,
//         iterations: 1,
        
//     }
// )
elt.animate(
    {
      opacity: [0,0.5, 0.9, 1],
      offset: [0, 0.8], //
      easing: ["ease-in", "ease-out"],
    },
    4000,
  );

  setInterval(()=>{
    backCircle.animate(
        {
          opacity: [.3,0.5, 0.9,],
          offset: [0, 0.8], //
          easing: ["ease", "ease-out"],
        },
        3000,
      );
  }, 3000)


  window.scroll({
    top: 100,
    left: 100,
    behavior: "smooth",
  });
  
