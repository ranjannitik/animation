var tm=gsap.timeline();

gsap.from(".nav h3",{
    y:-50,
    opacity:0,
    stagger:0.2,
    delay:0.5,
    duration:0.5
})


tm.from("body h1:nth-child(2)",{
    x:-500,
    opacity:0,
    delay:0.4,
    duration:0.8,

})
tm.from("body h1:nth-child(3)",{
    x:-500,
    opacity:0,
    delay:0.4,
    duration:0.8,

})
tm.from("body h1:nth-child(4)",{
    x:-500,
    opacity:0,
    delay:0.4,
    duration:0.8,

})


tm.from("body img",{
    x:900,
    rotation:45,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:1

})