// Input: birthYear is a positive integer Number (not greater than 2026),
// or a String of digits such as "1991".
function printAgeIn2026(birthYear){
    let age = 2026 - birthYear;

    console.log("This person will turn " + age + " in 2026.")
    return age;
}

// Input: age is a positive integer Number, or a String of digits such as "19".
function printAgeIn10Years(age){
    let newAge = Number(age) + 10;

    console.log("This person will be " + newAge + " in 10 years.")
    return newAge;
}

// Input: age is a String or Number representing an integer.
function checkIfAdult(age){
    let isAdult = age >= 18;

    console.log("The person is " + (isAdult ? "" : "not")  + " adult.")
    return isAdult;
}

function checkIfZero(number){
    let isZero = number === 0;

    console.log("The input is " + (isZero ? "" : "not")  + " 0.")
    return isZero;
}

// Input: string is a non-empty String, number is a Number (not NaN).
function checkIfEquivalent(string, number){
    let isEquivalent = string == number;

    console.log("The string is " + (isEquivalent ? "" : "not")  + " equivalent to the number.")
    return isEquivalent;
}

// Input: unreadCount is a positive integer Number, null, or undefined.
function unreadAlert(unreadCount){
    unreadCount && console.log("You have " + unreadCount + " messages.")
}

function unreadAlertValidated(unreadCount){
    typeof unreadCount === "number" && unreadCount > 0 && console.log("You have " + unreadCount + " messages.")
}

// Input: unreadCount is a String, Number, null, or undefined.
function unreadAlertStringInput(unreadCount){
    unreadCount != null && Number(unreadCount) > 0 && console.log("You have " + unreadCount + " messages.")
}

// Input: score is a Number, null, or undefined.
function showScore(score){
    let correctedScore = score ?? "N/A";

    console.log("The score is:" + score)
    return correctedScore;
}

// Input: username is a String (possibly empty) or undefined.
function printWelcomeMessage(username){
    let userOrPlaceholder = username || "Mustang";

    console.log("Welcome, " + userOrPlaceholder + "!")
    return userOrPlaceholder;
}
