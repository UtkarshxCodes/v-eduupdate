const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function certificationSelector() {
    var cards = document.querySelectorAll(".certification-card");
    var certImage = document.getElementById("cert-image");
    var certName = document.getElementById("cert-name");
    var certPrice = document.getElementById("cert-price");

    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            cards.forEach(function(c) {
                c.classList.remove("active");
            });
            card.classList.add("active");

            var name = card.getAttribute("data-name");
            var price = card.getAttribute("data-price");
            var image = card.getAttribute("data-image");

            certName.textContent = name;
            certPrice.textContent = price;
            certImage.src = image;
            certImage.alt = name;
        });
    });
}

function page3DropdownAnimation() {
    var cards = document.querySelectorAll(".elem-card");
    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            cards.forEach(function(c) {
                if (c !== card) {
                    c.classList.remove("active");
                }
            });
            card.classList.toggle("active");
        });
    });
}

function page4Animation() {
    var elemC = document.querySelector("#elem-container");
    if (elemC) {
        var fixed = document.querySelector("#fixed-image");
        if (fixed) {
            elemC.addEventListener("mouseenter", function () {
                fixed.style.display = "block"
            })
            elemC.addEventListener("mouseleave", function () {
                fixed.style.display = "none"
            })
        }
    }
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 1000)
}

swiperAnimation()
page3DropdownAnimation()
page4Animation()
certificationSelector()
menuAnimation()
loaderAnimation()

// ===============================================
// PROJECT CARD INTERACTIONS
// ===============================================

// 1. Card Hover Animation
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-15px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});

// 2. Smooth Fade-in on Scroll
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-project");
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll(".project-card").forEach(card=>{
    observer.observe(card);
});

// 3. Ripple Effect on Button
document.querySelectorAll(".project-btn").forEach(btn=>{
    btn.addEventListener("click",function(e){
        let circle=document.createElement("span");
        circle.className="ripple";
        let rect=this.getBoundingClientRect();
        circle.style.left=e.clientX-rect.left+"px";
        circle.style.top=e.clientY-rect.top+"px";
        this.appendChild(circle);
        setTimeout(()=>{
            circle.remove();
        },600);
    });
});

// 4. Floating Glow Effect
setInterval(()=>{
    document.querySelectorAll(".project-card").forEach(card=>{
        card.style.boxShadow=
        `0 20px ${25+Math.random()*25}px rgba(37,99,235,.15)`;
    });
},1800);

// 5. Tilt Effect on Mouse Move (Desktop only)
if(window.innerWidth > 768){
    projectCards.forEach(card=>{
        card.addEventListener("mousemove",(e)=>{
            const rect=card.getBoundingClientRect();
            const x=e.clientX-rect.left;
            const y=e.clientY-rect.top;
            const rotateY=((x/rect.width)-0.5)*8;
            const rotateX=((rect.height/2-y)/rect.height)*8;
            card.style.transform=
            `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener("mouseleave",()=>{
            card.style.transform="";
        });
    });
}

// Refresh LocomotiveScroll after all animations are loaded
setTimeout(()=>{
    if(scroll && typeof scroll.update === 'function'){
        scroll.update();
    }
}, 1500);