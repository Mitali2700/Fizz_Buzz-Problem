var output = [];
var count=1;
function fizzBuzz(){

 
  if(count % 3===0 && count % 5===0)
      {
    output.push("fizz-buzz");
    }else
  if(count % 3===0)
  {
    output.push("fizz");
  }else
    if(count % 5===0){
    output.push("buzz");
  }else

      
 // WE REMOVE THIS FROM HERE BECAUSE OUR CODE GIVES FIZZ FOR 15 BCZ IT SATISFIES "count%3==0" CONDITION. THATS WHY WE SHIFT THIS CONDITION TO 1ST. 
    //   if(count % 3===0 && count % 5===0)
    //   {
    // output.push("fizz-buzz");
    // }else

      
  {
        output.push(count);
  }
  count++;

  console.log(output);
}
 

