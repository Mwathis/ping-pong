// Business Logic

var numbers=[];

function PingPong(number){

		for (var i=1;i<number;i++){
		 	if(i%15===0){
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
}

// User Interface

$(document).ready(function(){
	$("form#ping-pong").submit(function(event){
		event.preventDefault();
			var number=parseInt($("input#number").val());

			PingPong(number);

			numbers.forEach(function(number){
				$("ul#result").append("<li>"+number+"</li>")
		});
	});
});
