// let flex=document.getElementById('flex');
// flex.addEventListener('mouseover',function(){
//     let hi=document.getElementById('qwerty');
//     let a=hi.getAttribute("per");
//     let id=setInterval(increase,10);
//     let b=0;
//     function increase(){
//         b++;
//         hi.style.width=b+"px";
//         let c=hi.style.width;
//         let d=parseInt(c);
//         console.log(d);
//         console.log(c);
//         console.log(hi.style.width);
//         if(d>=a){
//             clearInterval(id);
//         }
//     }
// });
// let flex=document.getElementById('flex');
// flex.addEventListener('mouseover',function(){
//     let elements=document.getElementsByClassName('inner');
//     if(elements!=null){
//         console.log("hi");
//     }
//     console.log(elements.length);
//     for(let i=0;i<elements.length;i++){
//         let a=elements[i].getAttribute("per");
//         console.log(a);
//         let id=setInterval(increase,10);
//         let b=0;
//         function increase(){
//             b++;
//             elements[i].style.width=b+"px";
//             let c=elements[i].style.width;
//             let d=parseInt(c);
//             if(d>=a){
//                 clearInterval(id);
//             }
//         }
//     }
// });
// const customEvent=new Event("visi");
// document.addEventListener('visi',function(){
//     let elements=document.getElementsByClassName('inner');
//     if(elements!=null){
//         console.log("hi");
//     }
//     console.log(elements.length);
//     for(let i=0;i<elements.length;i++){
//         let a=elements[i].getAttribute("per");
//         console.log(a);
//         let id=setInterval(increase,10);
//         let b=0;
//         function increase(){
//             b++;
//             elements[i].style.width=b+"px";
//             let c=elements[i].style.width;
//             let d=parseInt(c);
//             if(d>=a){
//                 clearInterval(id);
//             }
//         }
//     }
// });

// let a=isVisible();
// function isVisible(){
//     let ele=document.getElementById('flex');
//     const rect=ele.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }
// if(a==1){
//     document.dispatchEvent(customEvent);
// }
let ab=1;
let ele=document.getElementById('flex');
window.addEventListener('scroll',function(){
    let a=isVisible();
function isVisible(){
    const rect=ele.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
    if(a==0){
        ab=1;
    }
    if(ab==0){
        return;
    }
    a=isVisible();
function isVisible(){
    const rect=ele.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
if(a==1){
    ab=0;
        let elements=document.getElementsByClassName('inner');
    if(elements!=null){
        console.log("hi");
    }
    console.log(elements.length);
    for(let i=0;i<elements.length;i++){
        let a=elements[i].getAttribute("per");
        console.log(a);
        let id=setInterval(increase,10);
        let b=0;
        function increase(){
            b++;
            elements[i].style.width=b+"px";
            let c=elements[i].style.width;
            let d=parseInt(c);
            if(d>=a){
                clearInterval(id);
            }
        }
    }
}
});
//if(rect.top<window.innerHeight)



