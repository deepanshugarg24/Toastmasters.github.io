function validatefn(){
  var fname=document.getElementById("firstname").value;
  if(fname.length<2){
    document.getElementById("validate1").innerHTML="enter at least 2 characters in name!";
  }
  else{
    document.getElementById("validate1").innerHTML="";
  }
}
function validatepn(){
  var pn=document.getElementById("phoneno").value;
  var re3=/^\d{3}-\d{3}-\d{4}$/;
  if(re3.test(pn)){
    document.getElementById("validate2").innerHTML="";
  }
  else{
    document.getElementById("validate2").innerHTML="enter phone number in xxx-xxx-xxxx format!";
  }
}
function register() {
  alert("Thank You For Registering! You will be intimated by all the details via mail.");
}
