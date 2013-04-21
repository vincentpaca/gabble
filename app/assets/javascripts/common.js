$(document).ready(function(){
  $("#addTask").click(function(){
    $("#addTaskModal").show();
    $(".modal-backdrop").show();
  });
  $(".close").click(function(){
  	$(".modal-backdrop").hide();
  	$(".modal").hide();
  });
  $(".commit-link").click(function(){
    $(this).parent().html("<div class='item-commit-form'><input class='commit-edit-input' type='text'><button type='submit'>Save</button>");
    $(".commit-edit-input").focus();

  });
});

