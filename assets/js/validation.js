function validationform(){
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let subject=document.getElementById("subject").value
    let msg=document.getElementById("msg").value


    if(name==""){
        document.getElementById("nameid").innerHTML="Name must be filled out"
        setTimeout(()=>{
            document.getElementById("nameid").innerHTML=""

        },3000)
        return false

    }

  
if(/\d/.test(name)){
    document.getElementById("nameid").innerHTML = "Name must be a character "
    setTimeout(function(){
        document.getElementById("nameid").innerHTML  = ""
        },3000)
    return false; 


    }

    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
     document.getElementById("emailid").innerHTML= "Enter a valid email address"
      setTimeout(function(){
         document.getElementById("emailid").innerHTML = ""
            },3000)
      return false;
    }

    if (subject == "") {
        document.getElementById("subid").innerHTML  = "Subject must be filled out"
         setTimeout(function(){
            document.getElementById("subid").innerHTML  = ""
               },3000)
         return false;
       }

       
   if (msg == "") {
    document.getElementById("msgid").innerHTML  = "Message must be filled out"
     setTimeout(function(){
        document.getElementById("msgid").innerHTML  = ""
           },3000)
     return false;
   }


}