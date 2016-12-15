$(document).ready(function() {
    
	
    var images = ["001.jpg", "002.jpg", "003.jpg"];
    
    $("#banner").css({"background-image": "url(images/" + images[Math.floor(Math.random()*images.length)] + ")" });
    
    

    
    
});





                  
$(document).scroll(function() {
    
    var y = $(document).scrollTop();
        $("#update").html(y);
    
    if ( y > 600 ) {
        $("#img1").fadeIn(1000);
        $("#img1").addClass("rise");
    
}
    
     if ( y > 550 ) {
        $("#colorblock4").fadeIn(1000);
}
    
    
      if ( y > 650 ) {
        $("#logo_horse").fadeOut(1000);
}
    
    if ( y > 650 ) {
        $("#logo_black").fadeIn(1000);
}
    
       if ( y > 700 ) {
        $("#collection").fadeIn(1000);
        $("#collection").addClass("rise2");
}
    
       if ( y > 700 ) {
        $("#shopnow1").fadeIn(1000);
        $("#shopnow1").addClass("rise5");
}
    
        if ( y > 700 ) {
        $("#arrow1").fadeIn(1000);
        $("#arrow1").addClass("rise53");
}
    
    
     if ( y > 500) {
        $("#colorblock2").fadeIn(1000);
        $("#colorblock2").addClass("rise8");
}
    
   
       if ( y > 550) {
        $("#img2").fadeIn(1000);
        $("#img2").addClass("rise7");
}
    
    
 

       if ( y > 1000 ) {
        $("#img3").fadeIn(1000);
        $("#img3").addClass("rise3");
}
    

    
     if ( y > 1050 ) {
        $("#milady").fadeIn(1000);
        $("#milady").addClass("rise4");
}

    if ( y > 1050 ) {
        $("#shopnow2").fadeIn(1000);
        $("#shopnow2").addClass("rise6");
}
    
      if ( y > 1050 ) {
        $("#arrow2").fadeIn(1000);
        $("#arrow2").addClass("rise63");
}
    
    if ( y > 1100 ) {
        $("#horses").fadeIn(1000);
        $("#horses").addClass("rise9");
}
    
      if ( y > 1100 ) {
        $("#colorblock1").fadeIn(1000);
        $("#colorblock1").addClass("rise91");
}
    
     if ( y > 1150 ) {
        $("#join").fadeIn(1000);
        $("#join1").addClass("rise92");
}
    
    
    
    
            if ( y > 2500 ) {
        $(".name").fadeOut();
}
    
    
    
    
    
    else {
        $(".name").fadeIn();
}
    
           
            if ( y > 2500 ) {
        $(".description").fadeOut();
}
    
    else {
        $(".description").fadeIn();
}
    
           if ( y > 2500 ) {
        $(".details").fadeOut();
}
    
    else {
        $(".details").fadeIn();
}
    
    
           if ( y > 2500 ) {
        $(".price").fadeOut();
}
    
    else {
        $(".price").fadeIn();
}
    
          if ( y > 2500 ) {
        $(".shipping").fadeOut();
}
    
    else {
        $(".shipping").fadeIn();
}
    
          if ( y > 2500 ) {
        $(".size").fadeOut();
}
    
    else {
        $(".size").fadeIn();
}

     
          if ( y > 2500 ) {
        $("#back").fadeOut();
}
    
    else {
        $("#back").fadeIn();
}
    
    
          if ( y > 2500 ) {
        $(".add").fadeOut();
}
    
    else {
        $(".add").fadeIn();
}
    
    
       if ( y > 2500 ) {
        $(".also").fadeIn();
}
    
    else {
        $(".also").fadeOut();
}
    
    
    
    var y = $(document).scrollTop(), //get page y value 
        header = $("nav");
    if(y >= 650)  {
        header.css({position: "fixed", "top" : "0", "left" : "0"});
    } else {
        header.css({position: "absolute", "top" : "650px"});
    }
    
   
    
    
 

    
});



