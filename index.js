var submit = $('.button');
submit.on("click", GreetUser);

function GreetUser() {
  event.preventDefault();
  
  var First = $('.First').val();
  var Last = $('.Last').val();
  var email = $('.email').val();
  
  var Info = {First: First, Last: Last, email: email };
  
  var output = $('.container-out');
  output.text(`Thank you ${Info.First} ${Info.Last} for registering for daily news updates on Corona. A confirmation email has been sent to ${Info.email}, please follow the link. Stay Safe!`);
  
  var lastInput = $('.Last');
  lastInput.val("");
  var emailInput = $('.email');
  emailInput.val("");
  var firstInput = $('.First');
  firstInput.val("");
}
