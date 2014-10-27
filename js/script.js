$(document).ready(function(main) {
	var cont = 1;
	function main(){
		$('.menu').click(function() {
			/* Act on the event */
			if(cont==1){
				$('nav').animate({
					left: '0'});
			}else{
				$('nav').animate({left:'-100%'});
			}
		});
	}
});