var t1 = gsap.timeline();

t1.from("#left-top-main h1",{
    y:30,
    duration:0.5,
    stagger:1,
    opacity:0
})
.from("#left-top-main p",{
    x:-30,
    duration:1,
    opacity:0
})
// gsap.to("#nav",{
//     scrollTrigger:{
//         trigger:"#section2",
//         start:"top 0%"
//     },
//     position:"fixed"
// })

let s =  document.querySelector(".parent").textContent;
let arr = s.split(" ");
var str="";
for(var i=0;i<arr.length;i++){
    arr[i]= `<span data-delay = ${i}class"anim">${arr[i]}</span>`;
    str+=arr[i]+" ";
}

document.querySelector("#section2 h1").innerHTML = str;
var t2 = gsap.timeline();
t2.from(".parent span",{
    width:0,
    delay:dataset.delay*0.1,
    x:20,
    duration:1,
    stagger:1,
    opacity:0,
    ease:"elastic.out"
})
.from("#oval" ,{
    y:20,
    duration: dataset.time * 0.5,
    stagger:0.5,
    opacity:0
})
    

