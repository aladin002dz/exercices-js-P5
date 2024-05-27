function checkAge(age) {
    if (age < 18) {
        console.log("Vous êtes mineur.");
    } else if (age >= 18 && age <= 65) {
        console.log("Vous êtes majeur.");
    } else {
        console.log("Vous êtes senior.");
    }
}

export default checkAge;
