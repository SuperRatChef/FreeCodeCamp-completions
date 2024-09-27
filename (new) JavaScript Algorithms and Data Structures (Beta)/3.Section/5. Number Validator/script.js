// Function to validate US phone number

let check_btn = document.getElementById("check-btn");
let clear_btn = document.getElementById("clear-btn");

let key1 = document.getElementById("key1");
let key2 = document.getElementById("key2");
let key3 = document.getElementById("key3");
let key4 = document.getElementById("key4");
let key5 = document.getElementById("key5");
let key6 = document.getElementById("key6");
let key7 = document.getElementById("key7");
let key8 = document.getElementById("key8");
let key9 = document.getElementById("key9");
let key_asterisk = document.getElementById("key*");
let key0 = document.getElementById("key0");
let key_hashtag = document.getElementById("key#");


function validatePhoneNumber(phoneNumber) {
    // Regular expression to validate US phone numbers
    const validPattern = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

    // Test against all valid patterns
    return validPattern.test(phoneNumber);
}
// Check button functionality
check_btn.addEventListener("click", function() {
  console.log("this is happening");
    const userInput = document.getElementById("user-input").value.trim();
    const resultsDiv = document.getElementById("results-div");

    if (userInput === "") {
        alert("Please provide a phone number");
        return;
    }

    if (validatePhoneNumber(userInput)) {
        resultsDiv.textContent = `Valid US number: ${userInput}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${userInput}`;
    }
});

// Clear button functionality
clear_btn.addEventListener("click", function() {
    document.getElementById("user-input").value = ""; // Clear the input
    document.getElementById("results-div").textContent = ""; // Clear the results
});

key1.addEventListener("click", function(){
  document.getElementById("user-input").value += "1";
})
key2.addEventListener("click", function(){
  document.getElementById("user-input").value += "2";
})
key3.addEventListener("click", function(){
  document.getElementById("user-input").value += "3";
})
key4.addEventListener("click", function(){
  document.getElementById("user-input").value += "4";
})
key5.addEventListener("click", function(){
  document.getElementById("user-input").value += "5";
})
key6.addEventListener("click", function(){
  document.getElementById("user-input").value += "6";
})
key7.addEventListener("click", function(){
  document.getElementById("user-input").value += "7";
})
key8.addEventListener("click", function(){
  document.getElementById("user-input").value += "8";
})
key9.addEventListener("click", function(){
  document.getElementById("user-input").value += "9";
})
key_asterisk.addEventListener("click", function(){
  document.getElementById("user-input").value += "*";
})
key0.addEventListener("click", function(){
  document.getElementById("user-input").value += "0";
})
key_hashtag.addEventListener("click", function(){
  document.getElementById("user-input").value += "#";
})



