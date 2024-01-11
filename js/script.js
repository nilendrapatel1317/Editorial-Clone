// Loader
function loader(){
    document.addEventListener("readystatechange",function(){
        if(document.readyState==="complete"){
            // document.querySelector("#loader").style.backgroundColor= "transparent";
            document.querySelector(".loader").style.height=0;
            // document.querySelector("#loader .loader").style.scale=0;
        }
    })
}
loader();


function box(){
    var parent = document.querySelector('.parent');
    var card = document.querySelector('.card');
    var box = document.querySelector('.box');

    window.addEventListener('scroll', function() {

    var scrollY = window.scrollY;

    if (scrollY <= 1300) {
        card.style.marginTop = "0px";
        card.style.transform = "rotateX(10deg)rotateZ(" + (-scrollY) * (360 / 1300) + "deg)scale(" + (1 + ((2.8 / 1300) * scrollY)) + ")" + "translateY(" +((130 / 1300) * scrollY)+ "px)"; 
        parent.style.top = "200px";
        parent.style.left = "560px";   
    }

    if (scrollY > 1300) {
        card.style.opacity = scrollY-1300;
        box.style.opacity = scrollY + 1;   
    }

    });
}
box();


function fontChange(){
    var font = document.querySelector('#p4 h1 span');

    window.addEventListener('scroll', function() {

        var scrollX = window.scrollX;

        document.querySelector("#p4").addEventListener("mousemove", function(dets,clientX){
            console.log(dets.screenX);
            var X = dets.clientX
            console.log(X);
            document.querySelectorAll('#p4 h1 span').forEach(function(elem){
                if(X > 0 && X < 60){
                    elem.style.fontFamily = "enthin"
                    elem.style.letterSpacing = (X/X + 20) + "px"
                    
                }
                else if(X > 60 && X < 150){
                    elem.style.fontFamily = "enultralight"
                    elem.style.letterSpacing = (X/X + 20) + "px"
                    
                }
                else if(X >150 && X < 300){
                    elem.style.fontFamily = "enlight"
                    elem.style.letterSpacing = (X/X + 20) + "px"
                    
                }
                else if(X > 350 && X < 750){
                    elem.style.fontFamily = "enregular"
                    elem.style.letterSpacing = (X/X + 20) + "px"
                    
                }
                else if(X > 750 && X < 900){
                    elem.style.fontFamily = "enmedium"
                    elem.style.letterSpacing = (X/X + 20) + "px"
                    
                }
                else if(X > 900 && X < 1000){
                    elem.style.fontFamily = "enbold"
                    elem.style.letterSpacing = (X/X + 20) + "px"
                    
                }
                else if(X > 1000 && X < 1130){
                    elem.style.fontFamily = "enultrabold"
                    elem.style.letterSpacing = (X/X + 20) + "px"
                    
                }
                else if(X > 1130 && X < 1300){
                    elem.style.fontFamily = "enheavy"
                    elem.style.letterSpacing = (X/X + 20) + "px"
                    
                }
                

            });
            
        })
    });
}
fontChange();


gsap.from("#p2 p",{
    scrollTrigger:{
        trigger:"#p2 p",
        strat:"top top",
        end:"top 60%",
        scrub:true,
        // markers:true

    },
    y:200,
    scale:0
})


gsap.to("#p4 .overlay .black-box",{
    scrollTrigger:{
        trigger:"#p4 .overlay .black-box",
        start:"top bottom",
        scrub:true,
        // markers:true
    },
    width: "45%",
    height: "50%",
})
