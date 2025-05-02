gsap.to(".wel-box",{
    rotation:360,
    x: '100vw',
    xPercent: -100,
    duration: 2,
    repeat: -1,
    yoyo: true,
})

gsap.to(".user-name", {
    rotation:360,
    ease:'sine.out',
    repeatDelay: 2,
    duration: 2,
})

gsap.to(".red-box", {
    x:"175vh",
    duration:2,
    rotation: 360,
    opacity:0,
    yoyo: true,
    repeat: 2
})

gsap.to(".green-box", {
    x:'100vh',
    rotation: 360,
    duration: 2,
    delay: 2,
    opacity: 0
})
gsap.to('.red-box', {
    duration:2.5,
    ease: "power1.out",
    x: "400%"
    });
gsap.to(".purple-box", 
    {
    x:'100vh',
    rotation: 360,
    duration: 2,
    delay: 3,
    opacity: 0,
},)
gsap.to('.purple-box', {
    duration:2.5,
    ease: "power1.out",
    x: "400%"
    });