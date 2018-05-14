// Business Logic

function PingPong(number){
	var numbers=[];
		for (var i=1;i<=number;i++){
		 	if((i%3===0)&&(i%5===0)){
				numbers.push("pingpong");
				}
			else if(i%5===0){
				numbers.push("pong");
			}
			else if(i%3===0){
				numbers.push("ping");
			}
			else{
				numbers.push(i)
			}
		}
		return numbers;
}

// User-interface logic

$(document).ready(function(){
	$("form#ping-pong").submit(function(event){
		event.preventDefault();

			$("ul#output").empty();
			var number=parseInt($("input#number").val());

			var result=PingPong(number);
			for(var index=0;index<result.length;index+=1){
				$("ul#output").append("<li>"+result[index]+"</li>")
			}
			/*
			numbers.forEach(function(number){
				$("ul#output").append("<li>"+number+"</li>")
		});
		*/
	});
});
