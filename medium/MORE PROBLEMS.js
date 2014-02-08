Using the JavaScript language, have the function CountingMinutes(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 

Use the Parameter Testing feature in the box below to test your code with different arguments.

function CountingMinutes(str) { 

  // code goes here  
  return str; 
         
}
Input = "12:30pm-12:00am"Output = 690
Input = "1:23am-1:08am"Output = 1425



Using the JavaScript language, have the function CoinDeterminer(num) take the input, which will be an integer ranging from 1 to 250, and return an integer output that will specify the least number of coins, that when added, equal the input integer. Coins are based on a system as follows: there are coins representing the integers 1, 5, 7, 9, and 11. So for example: if num is 16, then the output should be 2 because you can achieve the number 16 with the coins 9 and 7. If num is 25, then the output should be 3 because you can achieve 25 with either 11, 9, and 5 coins or with 9, 9, and 7 coins. 

Use the Parameter Testing feature in the box below to test your code with different arguments.

function CoinDeterminer(num) { 

  // code goes here  
  return num; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CoinDeterminer(readline());        
Input = 6Output = 2
Input = 16Output = 2


Using the JavaScript language, have the function MostFreeTime(strArr) read the strArr parameter being passed which will represent a full day and will be filled with events that span from time X to time Y in the day. The format of each event will be hh:mmAM/PM-hh:mmAM/PM. For example, strArr may be ["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"]. Your program will have to output the longest amount of free time available between the start of your first event and the end of your last event in the format: hh:mm. The start event should be the earliest event in the day and the latest event should be the latest event in the day. The output for the previous input would therefore be 01:30 (with the earliest event in the day starting at 09:10AM and the latest event ending at 02:45PM). The input will contain at least 3 events and the events may be out of order. 

Use the Parameter Testing feature in the box below to test your code with different arguments.

function MostFreeTime(strArr) { 

  // code goes here  
  return strArr; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MostFreeTime(readline());                            

Input = "12:15PM-02:00PM","09:00AM-10:00AM","10:30AM-12:00PM"Output = "00:30"
Input = "12:15PM-02:00PM","09:00AM-12:11PM","02:02PM-04:00PM"Output = "00:04


Using the JavaScript language, have the function OverlappingRectangles(strArr) read the strArr parameter being passed which will represent two rectangles on a Cartesian coordinate plane and will contain 8 coordinates with the first 4 making up rectangle 1 and the last 4 making up rectange 2. It will be in the following format: "(0,0),(2,2),(2,0),(0,2),(1,0),(1,2),(6,0),(6,2)." Your program should determine the area of the space where the two rectangles overlap, and then output the number of times this overlapping region can fit into the first rectangle. For the above example, the overlapping region makes up a rectangle of area 2, and the first rectangle (the first 4 coordinates) makes up a rectangle of area 4, so your program should output 2. The coordinates will all be integers. If there's no overlap between the two rectangles return 0. 

Use the Parameter Testing feature in the box below to test your code with different arguments.

function OverlappingRectangles(strArr) { 

  // code goes here  
  return strArr; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
OverlappingRectangles(readline());                            

Input = "(0,0),(0,-2),(3,0),(3,-2),(2,-1),(3,-1),(2,3),(3,3)"Output = 6
Input = "(0,0),(5,0),(0,2),(5,2),(2,1),(5,1),(2,-1),(5,-1)"Output = 2

