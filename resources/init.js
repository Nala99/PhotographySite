 $(document).ready(function() {
 	//Create dropdown Menu
 	var pageTitle = document.title;

 	$(".navBtn").each(function(){
 		//Set the active page
 		if(pageTitle == this.id){
 			$(this).addClass("activeBtn");
 		}

 		$(this).hover(function(){
 			//Shows sub menu if it exists when the mouse scrolls over the button
 			$(".subNav",this).slideDown(200);
 			$(this).addClass("activeBtn");
 		},function(){
 			//Hides sub menu when exiting the button/sub menu
 			$(".subNav",this).slideUp(200);
 			if(pageTitle != this.id){
 				$(this).removeClass("activeBtn");
 			}
 		});
 	});

 	$(".subNavBtn").each(function(){
 		$(this).hover(function(){
 			$(this).addClass("activeBtn");
 		},function(){
 			$(this).removeClass("activeBtn");
 		});
 	});
 })