 const form=document.getElementById("form")
 const username=document.getElementById("username");
 const email=document.getElementById("email")
 const password=document.getElementById("password");
 const password2=document.getElementById("password2");



 function checkRequired(inputs){
    inputs.forEach(input=>{
        if(input.value.trim()===""){
//Error
errorInput(input,`${getName(input)} is Required`)
        }
        else{
            //success
            successInput(input)
        }
    })
 }
 function getName(input){
    // return input.id;
    return input.getAttribute("data-name")
 }
function errorInput(input,message){
    const formGroup=input.parentElement;
    formGroup.class="form-group ";
    const p =formGroup.querySelector("p")
    p.innerHTML=message;
  

}
function successInput(input){
    const formGroup=input.parentElement;
    formGroup.class="form-group success";
    const p= formGroup.querySelector('p');
    p.innerHTML="";
}
function checkLength(input,min,max){
    const data=input.value.trim().length
    if(data<min){
errorInput(input,`${getName(input)} must be atleeast greater then ${min} characters `)
    }else if(data>min){
errorInput(input,`${getName(input)} must be atlest lesser then ${max} characters`)
    }
} 
function checkConformPassword(password,password2){
    if(password.value!=password2.value){
        errorInput(password2,`${getName(password2)} does not match`)
    }
 }
 form.addEventListener("submit",function(e){
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username,5,10);
    checkLength(password,5,10);
    checkConformPassword(password,password2)
    // checkEmail(email);
    
 })

