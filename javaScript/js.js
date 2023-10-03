gsap.registerPlugin(Flip);
const t1 = gsap.timeline({defaults: {ease: "power1.out"}})


const docTitle = document.title;
const links = document.querySelectorAll(".nav-item a");
const lightactiveNav = document.querySelector(".L");
const nightactiveNav = document.querySelector(".N");
const nightMode = document.querySelector('.flipswitch-cb')
const body= document.querySelector('body');
const lightImage= document.querySelector('.light-img');
const nightImage= document.querySelector('.night-img');
const dot = document.querySelector('.dot');
const multitext = document.querySelector('.multitext');
const all = document.querySelector('*');
const loginBtn = document.querySelector('.btn-1')
const registerBtn = document.querySelector('.btn-2')
const loginpannel = document.querySelector('.wrapper')
const loginClose = document.querySelector('.x');
const passwordlock2=document.querySelector('.lock-2')
const passwordlock1=document.querySelector('.lock-1')
const passwordlock3 = document.querySelector('.lock-3')
const passwordlock4 = document.querySelector('.lock-4')
const passInput = document.querySelector('.password1')
const passInput2 = document.querySelector('.password2')
const register = document.querySelector('.register-link')
const loginL = document.querySelector('.login-link')
const loginSwitch = document.querySelector('.div-1')
const registerSwitch = document.querySelector('.div-2')
const callToAction = document.querySelector('.call-to-action')
const callToAction2 = document.querySelector('.call-to-action2')
const input1 = document.querySelector('.input-1')
const input2 = document.querySelector('.input-2')
const animatedSvg = document.querySelector('.clipboard-svg')
const input3 = document.querySelector('.input-3')
const input4 = document.querySelector('.input-4')
const input5 = document.querySelector('.input-5')
const Svg1= document.querySelector('.svg-1')
const Svg2= document.querySelector('.svg-2')
const Svg3= document.querySelector('.svg-3')
const Svg4= document.querySelector('.svg-4')



passwordlock1.addEventListener('click',()=>{
    passwordlock1.classList.add('hidden')
    passwordlock2.classList.remove('hidden')
    passInput.setAttribute('type','true')
})

passwordlock3.addEventListener('click',()=>{
    passwordlock3.classList.add('hidden')
    passwordlock4.classList.remove('hidden')
    passInput2.setAttribute('type','true')
})


passwordlock2.addEventListener('click',()=>{
    passwordlock2.classList.add('hidden')
    passwordlock1.classList.remove('hidden')
    passInput.setAttribute('type','password')
})

passwordlock4.addEventListener('click',()=>{
    passwordlock4.classList.add('hidden')
    passwordlock3.classList.remove('hidden')
    passInput2.setAttribute('type','password')
})


nightMode.addEventListener('click',()=>{
    document.body.classList.add('animation')
    setTimeout(() => {
        document.body.classList.remove('animation')
    }, 1000);
    document.body.classList.toggle('checked');
    Svg1.classList.toggle('hidden')
    Svg2.classList.toggle('hidden')
    Svg3.classList.toggle('hidden')
    Svg4.classList.toggle('hidden')
    lightImage.classList.toggle("aria-hidden");
    multitext.classList.toggle('cyan1');
    nightImage.classList.toggle("aria-hidden");
    lightactiveNav.classList.toggle('hidden');
    nightactiveNav.classList.toggle('hidden');
    dot.classList.toggle('cyan');
    all.setAttribute("style", 'color: white');
})

window.addEventListener('blur',()=>{
    document.title = 'Come Back 😠'
})
window.addEventListener('focus',()=>{
    document.title = docTitle;
})
links.forEach((link)=>{
    link.addEventListener('click',()=>{
        gsap.to(links,{color:'#999999e8'});
        
        if(document.activeElement === link){
            if(body.classList.contains('checked')){
            gsap.to(link, {color:'#25d0bc'});
            link.classList.toggle('light');

        }else{
            gsap.to(link, {color: '#f64c72'});
        }}
        if(body.classList.contains('checked')){
            let state = Flip.getState(nightactiveNav);
            link.appendChild(nightactiveNav);
        link.appendChild(lightactiveNav);
        Flip.from(state,{
            duration: 0.5,
            absolute: true,
        })}else{
            let state = Flip.getState(lightactiveNav);
            link.appendChild(lightactiveNav);
            link.appendChild(nightactiveNav);
            Flip.from(state,{
                duration: 0.5,
                absolute: true,
            })
        }
    });
});

var typingEffect= new Typed('.multitext',{
    strings: ["SALES","PROFITS","TRADES"],
    loop : true,
    typeSpeed: 100,
    backSpeed:80,
    backDelay: 1500
})

loginBtn.addEventListener('click',()=>{
    loginpannel.classList.remove('hidden')
    loginpannel.classList.remove('active')
    loginSwitch.classList.remove('move')
    registerSwitch.classList.remove('move2')
    loginpannel.classList.add('login')
    loginpannel.classList.remove('close')
})
registerBtn.addEventListener('click',()=>{
    loginpannel.classList.remove('hidden')
    loginpannel.classList.add('active')
    loginSwitch.classList.add('move')
    registerSwitch.classList.add('move2')
    loginpannel.classList.add('reg')
    loginpannel.classList.remove('close')
    
})

loginClose.addEventListener('click',()=>{
    loginpannel.classList.add('close')
    loginpannel.classList.remove('login')
    loginpannel.classList.remove('reg')
    
})

register.addEventListener('click',()=>{
    loginpannel.classList.add('active')
    loginSwitch.classList.add('move')
    registerSwitch.classList.add('move2')
})

loginL.addEventListener('click',()=>{
    loginpannel.classList.remove('active')
    loginSwitch.classList.remove('move')
    registerSwitch.classList.remove('move2')
})

callToAction.addEventListener('click',()=>{
    if(!input1.checkValidity()){
    }
    else if(!input2.checkValidity()){
    }else{
        animatedSvg.classList.remove('hidden');
        animatedSvg.classList.add('animate-svg')
        setTimeout(()=>{
            animatedSvg.classList.add('hidden')
            animatedSvg.classList.remove('animate-svg')
            },2200)
            loginpannel.classList.add('close');
        }
    })
    
    callToAction2.addEventListener('click',()=>{
        if(!input3.checkValidity()){}
        else if(!input4.checkValidity()){}
        else if(!input5.checkValidity()){}
        else{
            animatedSvg.classList.remove('hidden');
            animatedSvg.classList.add('animate-svg')
            setTimeout(()=>{
                animatedSvg.classList.add('hidden')
                animatedSvg.classList.remove('animate-svg')
            },1990)
            loginpannel.classList.add('close');
        }
    })
    
    
    t1.to('.text1',{ y: "0%", duration:1, stagger:0.25 });
    t1.to('.slider',{y:"-115%", duration:1.5, delay: .5 });
    t1.to('.intro',{y:"-110%", duration: 1},"-=1.2");
    t1.fromTo('nav', {opacity: 0},{opacity: 1, duration:1});
    t1.fromTo('.text', {opacity: 0},{opacity: 1, duration:1}, "-=.5");
    t1.fromTo('.notification', {opacity: 0},{opacity: 1, duration:1}, "-=.1");
    t1.to('.notification__progress',{scaleX:1, duration: 4}, "-=.9");
    t1.to('.notification' , {opacity:0, duration: .2})
    

