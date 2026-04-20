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