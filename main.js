function checkValidation(){
    var fname=document.getElementById('fname').value;
    var email=document.getElementById('email').value;
    var phno=document.getElementById('phno').value;
    var pass=document.getElementById('pass').value;
    var cnfpass=document.getElementById('cnfpass').value;
    
    if(fname==''){
        document.getElementById('fname_err').innerHTML="** Full Name must be required....";
        return false;
    }    
    if(!isNaN(fname)){
        document.getElementById('fname_err').innerHTML="** Please Don't enter Number in Full Name....";
        return false;
    }
    if(fname.length<5){
        document.getElementById('fname_err').innerHTML="** Full Name given atleast 5 Character....";
        return false;
    }
    if(email==''){
        document.getElementById('email_err').innerHTML="** Email ID must be required....";
        return false;
    }
    if(phno==''){
        document.getElementById('phno_err').innerHTML="** Phone No. must be required....";
        return false;
    }
    if(phno=='123456789'){
        document.getElementById('phno_err').innerHTML="** Phone No. Not be randomize. Number should be 10 digits";
        return false;
    }
    if(phno.length!=10){
        document.getElementById('phno_err').innerHTML="**Number should be 10 digits";
        return false;
    }
    if(pass==''){
        document.getElementById('pass_err').innerHTML="** Password must be required....";
        return false;
    }
    if(pass==fname){
        document.getElementById('pass_err').innerHTML="** Don't give full name as Password....";
        return false;
    }
    if(pass.length<6){
        document.getElementById('pass_err').innerHTML="** Password must be 6 digits....";
        return false;
    }
    if(cnfpass==''){
        document.getElementById('cnfpass_err').innerHTML="** Confirm Password must be required....";
        return false;
    }
    if(cnfpass!=pass){
        document.getElementById('cnfpass_err').innerHTML="** Please re-check your confirm password! it's Not same";
        return false;
    }

}
function pass_stg(){
        var pass=document.getElementById('pass').value;
        if(pass.length>=3){
            if(pass.match(/[0-9]+/) && pass.match(/[@#$]+/) && pass.match(/[a-z]+/) && pass.match(/[A-Z]+/) ){
                document.getElementById('pass_err').innerHTML="** Strong Password. Good Pick ";
                return true;
            }
            else{
                document.getElementById('pass_err').innerHTML="** weak Password.Use-[0-9,@#$,a-z,A-Z] in your password";
                return true;
            }
        }
}

function changealert(){
    var cur_year=document.getElementById('cur_year').value;
    if(cur_year!=2023){
        document.getElementById('cur_year_err').innerHTML="** Please select current year correctly";
                return false;
    }
    else{
        document.getElementById('cur_year_err').innerHTML="";
                return true;
    }
}
