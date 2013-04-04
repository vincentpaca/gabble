$(document).ready(function(){
  $("#addTask").click(function(){
    $("#addTaskModal").show();
    $(".modal-backdrop").show();
  });
  $(".close").click(function(){
  	$(".modal-backdrop").hide();
  	$(".modal").hide();
  });
});

