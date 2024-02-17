let inputSlider = document.getElementById("inputSlider");
let slidervalue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowerCase = document.getElementById("lowercase");
let UpperCase = document.getElementById("Uppercase");
let number = document.getElementById("Number");
let symbol = document.getElementById("Symbol");
let getBtn = document.getElementById("generate-button");
let copyIcon = document.getElementById("copyIcon");

//define
const length = inputSlider.value;
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+{}[]|:;<>,.?/~';


//show the lenght of password
slidervalue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    slidervalue.textContent = inputSlider.value;
});

getBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
})

//function to generate password
function generatePassword() {
    let genPassword = "";
    let allchars = '';
    allchars += lowerCase.checked ? lowercaseChars : '';
    allchars += UpperCase.checked ? uppercaseChars : '';
    allchars += number.checked ? numberChars : '';
    allchars += symbol.checked ? symbolChars : '';

    const length = inputSlider.value;

    if (allchars == "" || allchars.length == 0) {
        return genPassword;
    }

    // Append randomly selected character
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allchars.length);
        genPassword += allchars[randomIndex];
    }

    return genPassword;
}


copyIcon.addEventListener('click', () => {
    if (passBox === '') {
        return;
    } else {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.title = "Password Copied";
        copyIcon.innerText = "Check";

    }

    //clear the input
    setTimeout(() => {
        passBox.value = '';
        copyIcon.innerText = "content_copy";


    }, 3000)

})