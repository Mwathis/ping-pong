function fizzBuzz(number){
	var numbers=[];
  for (var i=0;i<number;i++){
   if((i%3===0)&&(i%5===0)){
      numbers.push("fizzbuzz");
      }
    else if(i%3===0){
      numbers.push("fizz");
    }
    else if(i%5===0){
      numbers.push("buzz");
    }
    else{
    numbers.push(i)
    }
  }
  return numbers;
}
