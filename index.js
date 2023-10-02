document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {
    
        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
            everyitem.addEventListener('mouseover', function(e){
    
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }
    
            });
            everyitem.addEventListener('mouseleave', function(e){
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
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
            if (top >= offSet && top <= offSet + height){
                sec.classList.add('show-animate');
            }
            // else{
            //     sec.classList.remove('show-animate');
            // }
        })
    }
    window.addEventListener("scroll",() => {
        let link = document.getElementsByClassName("main-menu-element");
        let whiteLogo = document.getElementById("white-logo");
        let blueLogo = document.getElementById("logo-blue");
        var navBar = document.getElementById("test-nav");
        navBar.classList.toggle("sticky", window.scrollY > 600);
        navBar.classList.toggle("navBarFixed", window.scrollY > 700);
        
        
    })

    document.addEventListener("DOMContentLoaded", function() {
        setTimeout(function() {
            document.querySelector("body").classList.add("loaded");
        }, 10)
      });