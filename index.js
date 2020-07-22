var flag=false;


$(".btn").on("click",function () {
  var k=Math.floor(Math.random()*2 )+1;
  if(k==1)
    $(".ans").html("1");
  else
  $(".ans").html("2");
  flag=true;
  $(".matmaan").addClass("matmaan2");
  $(this).html("kr lo phise koshish");

  jQuery(".matmaan").fadeOut(100);

});
