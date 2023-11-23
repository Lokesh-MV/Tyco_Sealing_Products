document.addEventListener("DOMContentLoaded", function () {
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {

        document.querySelectorAll('.navbar .nav-item').forEach(function (everyitem) {

            everyitem.addEventListener('mouseover', function (e) {

                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }

            });
            everyitem.addEventListener('mouseleave', function (e) {
                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }


            })
        });

    }
    // end if innerWidth
});


let sections = document.querySelectorAll('section');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offSet = sec.offsetTop - 300;
        let height = sec.offsetHeight;
        if (top >= offSet && top <= offSet + height) {
            sec.classList.add('show-animate');
        }
    })
}
window.addEventListener("scroll", () => {
    let link = document.getElementsByClassName("main-menu-element");
    let whiteLogo = document.getElementById("white-logo");
    let blueLogo = document.getElementById("logo-blue");
    var navBar = document.getElementById("test-nav");
    navBar.classList.toggle("sticky", window.scrollY > 600);
    navBar.classList.toggle("navBarFixed", window.scrollY > 700);


})

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector("body").classList.add("loaded");
    }, 10)
});

let menu_bars = document.getElementById("hamburger-button");
let nav_div = document.getElementById("nav-div");
function menu_display() {
    if (nav_div.style.display == "block") {
        nav_div.style.display = "none";
    } else {
        nav_div.style.display = "block";
    }
}

let abt_main = document.getElementById("abt-small-main-element");
let abt_sub_menu = document.getElementById("small-nav-sub-menu-abt");

function abt_sub_menu_show() {
    if (abt_sub_menu.style.display == "none") {
        abt_sub_menu.style.display = "block";
        prd_sub_menu.style.display = "none";
    } else {
        abt_sub_menu.style.display = "none";
    }
}

let prd_main = document.getElementById("prd-small-main-element");
let prd_sub_menu = document.getElementById("small-nav-sub-menu-prd");

function prd_sub_menu_show() {
    if (prd_sub_menu.style.display == "none") {
        prd_sub_menu.style.display = "block";
        abt_sub_menu.style.display = "none";

    } else {
        prd_sub_menu.style.display = "none";
    }
}

function newsletter() {
    let name = document.getElementById("touch-name").value;
    let me = document.getElementById("touch-mail").value;
    let company_name = document.getElementById("touch-company-name").value;

    let newsletter_body = "Name : " + name + "<br /> contact : " + me + "<br /> Company Name : " + company_name;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "venkatalokesh789@gmail.com",
        Password: "D0FF1539FFF88C28A9C06AB8AFF65C73666F",
        To: "info@tycosealing.com",
        From: "venkatalokesh789@gmail.com",
        Subject: "This is the subject",
        Body: "Newsletter Subscription <br />  <br />" + newsletter_body
    }).then(
        message => {
            if (message == 'OK') {
                swal("We got you!", "We will get back in no time to solve your Queries & Questions", "success");
            } else {
                swal("Failed", "Something went wrong!", "error");
            }
        }
    );
}


function contact() {

    let name = document.getElementById("username").value;
    let mobile = document.getElementById("mobile").value;
    let mail_id = document.getElementById("email").value;
    let type = document.getElementById("selectCity").value;
    let msg = document.getElementById("msg").value;

    let body = "Name : " + name + "<br /> Mobile : " + mobile + "<br /> + Email : " + mail_id + "<br /> Type : " + type + "<br /> Message :  " + msg;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "venkatalokesh789@gmail.com",
        Password: "D0FF1539FFF88C28A9C06AB8AFF65C73666F",
        To: "info@tycosealing.com",
        From: "venkatalokesh789@gmail.com",
        Subject: msg,
        Body: body
    }).then(
        message => {
            if (message == 'OK') {
                swal("We got you!", "We will get back in no time to solve your Queries & Questions", "success");
            } else {
                swal("Failed", "Something went wrong!", "error");
            }
        }
    );
}