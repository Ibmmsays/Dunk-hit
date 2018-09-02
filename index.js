var h = window.innerHeight
var w = window.innerWidth
/****************************/
var num = document.getElementById("num");
var ball = document.getElementById("ball");
var game = document.getElementById("game");
var body = document.getElementById("all");
function moving()
{
var counter=0;
  var x = 0;
var y = 0; 
body.addEventListener("keydown",                  
function (e)
{
    console.log(e.keyCode); 
   var x=0,y=0;
        
    if(e.keyCode==39)
        {
        x+=800;
         
        ball.style.left=x;
          
         }
    else if(e.keyCode==37)
        {
            x-=100;
        if(x<0)
          {
             x=0;
          }
             
            ball.style.left=x;

        }
  else if(e.keyCode==38)
        {
            
           y+=400;
            ball.style.bottom=y;

        }  
     else if(e.keyCode==40)
        {
           y=0;
            ball.style.bottom=y;
        }
            console.log(y);
            console.log(x);
        if(y==400)
       
          {
           console.log();
           counter++;
           num.innerHTML=counter;
          }

}  )
                
                
body.addEventListener("keyup", 
                      
 function(e)
        {
    console.log(e.keyCode);
    console.log('hema');
    
    if(e.keyCode == 38)
        {
            
      ball.style.bottom = 0; 
      
            
            
  
            
        }
            }
                     
                    )
}
setInterval(moving,1000);




