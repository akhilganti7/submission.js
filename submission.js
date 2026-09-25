
//input is a positive integer <= 2026, or a string of digits
function printAgeIn2026(birthYear) {
    let age = 2026 - birthYear;
    console.log("This person will turn " + age + " in 2026.")
    return age;
}

//input age is a positive integer number, or a string of digits
function printAgeIn10Years(age) {
    let newAge = age - 0 + 10; //because it turns strings into
    //numbers, subtracting by 0 doesn't change the value. + 10 adds, instead of joining
    console.log("This person will be " + newAge + " in 10 years.")
    return newAge;
}


//input age is a positive integer or string
function checkIfAdult(age) {
    let isAdult = age >= 18;
    console.log("The person is " + (isAdult ? "" : "not") + " adult.")
    return isAdult;
}

function checkIfZero(number) {
    let isZero = number === 0;

    console.log("The input is " + (isZero ? "" : "not") + " 0.")
    return isZero;
}

// input string is a non-empty String, number is a Number (not NaN).
function checkIfEquivalent(string, number) {
    let isEquivalent = string == number;

    console.log("The string is " + (isEquivalent ? "" : "not") + " equivalent to the number.")
    return isEquivalent;
}

// input unreadCount is a positive integer Number, null, or undefined.
function unreadAlert(unreadCount) {
    unreadCount && console.log("You have " + unreadCount + " messages.")
}

function unreadAlertValidated(unreadCount) {
    typeof unreadCount === "number" && unreadCount > 0 && console.log("You have " + unreadCount + " messages.")
}

// input unreadCount is a String, number, null, or undefined.
function unreadAlertStringInput(unreadCount) {
    unreadCount != null && Number(unreadCount) > 0 && console.log("You have " + unreadCount + " messages.")
}

// input score is a Number, null, or undefined.
function showScore(score) {
    let correctedScore = score ?? "N/A";

    console.log("The score is:" + score)
    return correctedScore;
}

// inputusername is a String (possibly empty) or undefined.
function printWelcomeMessage(username) {
    let userOrPlaceholder = username || "Mustang";

    console.log("Welcome, " + userOrPlaceholder + "!")
    return userOrPlaceholder;
}
