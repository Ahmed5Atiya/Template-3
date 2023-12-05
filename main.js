
let Textarea = document.querySelector("textarea");
let Count = document.querySelector(".count");
let maxlength = Textarea.getAttribute("maxlength")
Textarea.oninput = function (){
    console.log(Textarea.value.length)
    Count.style.width = `${(Textarea.value.length * 100) / maxlength }% `;
}

let DataAfter = new Date("DEC 31, 2024 23:59:59").getTime();
let counter = setInterval(() => {
    let DataNow = new Date().getTime();
    let Diff = DataAfter - DataNow ;
    let day = Math.floor(Diff / (1000 * 60 * 60 * 24) );
    let hour = Math.floor((Diff % (1000 * 60 * 60 * 24) ) / (1000 * 60 * 60 ))
    let minute = Math.floor((Diff % (1000 * 60 * 60) ) / (1000 * 60  ))
    let scound = Math.floor((Diff % (1000 * 60 ) ) / (1000 ))


    document.querySelector(".day").innerHTML = day ;
    document.querySelector(".Hours").innerHTML = hour ;
    document.querySelector(".minute").innerHTML = minute < 10 ? `0${minute}` : minute ;
    document.querySelector(".scound").innerHTML = scound < 10 ? `0${scound}` : scound;
    if(Diff < 0 ){
        clearInterval( counter );
    }
}, 1000);

let SectionSkills = document.querySelector(".Skills");
let SkillsSpan = document.querySelectorAll(".Skills .container .rate .skill .the-progress span");

// for the count the number in section state
let sectionCount = document.querySelector(".stats");
let allCount = document.querySelectorAll(".box .numper");
let started = false ;
    function startCount(el){
        let goal = el.dataset.goal;
        let count = setInterval(()=>{
            el.textContent++;
            if(el.textContent == goal){
                clearInterval(count);
            }
        },2000 / goal) 
    }

//  make the button to scroll to 
let ScrollTop = document.querySelector(".scroll-top");
window.onscroll = function(){
    this.scrollY >= 1500 ? ScrollTop.classList.add("show") : ScrollTop.classList.remove("show") ;
        // for full the width in the section skills
        if( window.scrollY >= SectionSkills.offsetTop  ){
            SkillsSpan.forEach(span => {
                span.style.width = span.dataset.width;
            });
        }
        // for count the number in the section state 
        if( window.scrollY >= sectionCount.offsetTop - 150 ){
            if(!started){
                allCount.forEach((num)=>{
                startCount(num);
                })
            }
            started = true;
        }  
}
ScrollTop.addEventListener("click" ,()=>{
    window.scrollTo({
        top : 0 ,
        behavior :"smooth"
    })
})


