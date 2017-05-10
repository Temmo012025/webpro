$( function() {

   $(".sectOne").hover(function(){
   	$(".transitionlines").css("width", "300px");
    }, function(){
    $(".transitionlines").css("width", "50px");
});
   
   $(".sectTwo").hover(function(){
   	$(".transitionlinestwo").css("width","900px");
   },function(){
   	$(".transitionlinestwo").css("width","50px");
   });
   
   $(".sectThree").hover(function(){
   	$(".transitionlinesthree").css("width","300px");
   },function(){
   	$(".transitionlinesthree").css("width","50px");
   });
    $(".fourthpic a").hover(function(){
     $(".transitionlinesfour").css("width","500px");
   },function(){
     $(".transitionlinesfour").css("width","50px");
   });
    $(".menu a").hover(function(){
    $(".menutransitionline").css("width", "300px");
    }, function(){
    $(".menytransitionline").css("width", "50px");
  });
    
});



