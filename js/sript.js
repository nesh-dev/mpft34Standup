

// console.log("hello world")
// var age = parseInt(prompt("what is your age"))
// console.log(typeof(age))

// if(age <= 12){
//     alert(`you are ${age} and in primary school`)
// }else if(age > 12 && age < 18) {
//     alert(`you are ${age} and in Highschool school`)
// }else {
//     alert(`you are ${age} you are in neither `)
// }




var submitButton = document.getElementById("submit");

submitButton.addEventListener("click", submitFormInputs);


function submitFormInputs(e) {
    e.preventDefault()
   var email =  document.getElementById("email").value
   var password = document.getElementById("password").value
   var check = document.getElementById("exampleCheck1").checked
   
   console.log(check, email, password, "we got values for all input.")

   alert(" Email field input value is " + " " +email)
   alert(" password field input value is " + " " +password)
   alert(" Chedked field input value is " + " " +check)
   al
}



