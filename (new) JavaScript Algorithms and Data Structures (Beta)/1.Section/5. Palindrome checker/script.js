const inputField = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkForPalindrome = (input) => {
    const originalInput = input;

    if(input === ""){
        alert("Please input a value")
        return;
    }else{
        result.replaceChildren();

        const modifiedInput = input.replace(/[^A-Za-z0-9]/gi, '').toUpperCase();
        let isPalindrome = modifiedInput === [...modifiedInput].reverse().join("") ? 
            `${originalInput} is a palindrome`
            :`${originalInput} is not a palindrome`;
        let message = `<strong>${isPalindrome}</strong>`;

        const p = document.createElement("p");
        p.className = 'user-input';
        p.innerHTML = message;
        result.appendChild(p);

        result.classList.remove('hidden');
    }
} 


checkButton.addEventListener('click', () => {
    checkForPalindrome(inputField.value);
    inputField.value = '';
});