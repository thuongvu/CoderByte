function TimeConvert(num) { 
var hours = Math.floor(num / 60),
mins = num % 60,
time = hours + ":" + mins;
num = time;
  
  // code goes here  
  return num; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
TimeConvert(readline());                            


