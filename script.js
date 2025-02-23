// Image animation start top 0 and finished top -100% where page was pin, in this case verical scrolling happend 
gsap.to("#page2 img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})

// Text animaation start top 0 and finished top 100% where page was pin, in this case Horizontal scrolling happened

gsap.to("#page3 h1",{
    transform:"translateX(-200%)",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        duration:4,
        pin:true
    }
})

gsap.from("#page4", {
    opacity: 0,
    scale: 0.5,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        
    }
});
