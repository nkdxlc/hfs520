$(document).ready(function() {
  $("#email").on("focus keyup", function() {
    var $email_val = $("#email").val();
    if ($email_val !== "") {
      $(".float-btn").addClass("active-btn");
    
      if (emailValidation(document.getElementById('email').value)) {
        $(".float-btn").addClass("active-btn-final");
        $("#float-btn").prop("disabled", false);
        $("#email").on("keypress", function(e) {
          if (e.which === 13) {
            $("#float-btn").trigger("click");
          }
        });
      } else {
        $(".float-btn").removeClass("active-btn-final"); 
        $("#float-btn").prop("disabled", true);
      }
    }
    else {
      $(this).parent().find("button").removeClass("active-btn");
    }
    
    $("input").each(function () {
        if($(this).val() === "") {
          $(this).parent().removeClass("is-active");
        } else {
          $(this).parent().addClass("is-active");
        }
    });
    
  }) 
});

$("input").on("focus", function() {
	$(this).parent().addClass("is-focused");
});

function emailValidation(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

$("#float-btn").click(function() {
  console.log($(this));
  var $this = $(this);
  $(this).html("").addClass('button-loading');
  if(document.getElementById('email').value === '623990373@qq.com'){
	$this.removeClass('button-loading').addClass("full-btn").text("Hi, my princess");
}else{
	$this.removeClass('button-loading').addClass("full-btn").text("WRONG");
}
  setTimeout(function() {
    $this.removeClass("full-btn active-btn active-btn-final").html("Verify");
    $("#email").val("").focus()
  },2000);
})
