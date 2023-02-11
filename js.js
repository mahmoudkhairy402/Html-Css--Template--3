let s =document.getElementById('second') ;
let m =document.getElementById('minute') ;
let h =document.getElementById('hour') ;
let d =document.getElementById('day') ;

 let i = 0 ;
 let j = 0 ;
 let z = 0 ;
 let x = 0 ;
// let hou=0 ;
let time =setInterval(function(){
    i++;
    s.innerHTML='00:'+i;
    if(i==60){
        i=0 ;
        j++
        m.innerHTML=j+':00';
        if(j==60){
            j=0;
            z++;
            h.innerHTML= z+':00' ;
            if(z==24){
                z=0
                x++ ;
                d.innerHTML= x;

            }
        }
    }
},1000) 
