function checkPasswordValidity(input) {
    let eMessage = [];

    if (input.length < 6) {
        eMessage.push("too short");
    }

    if (input.length > 20) {
        eMessage.push("too long");
    }

    if (input.search(/\d/) === -1) {
        eMessage.push("has to contain at least one number from 0-9");
    }

    if (input.search(/[a-z]/) === -1) {
        eMessage.push("has to contain at least one lower case character");
    }

    if (input.search(/[A-Z]/) === -1) {
        eMessage.push("has to contain at least one upper case character");
    }

    if (input.search(/[^a-zA-Z0-9!@#$%^&*()_]/) !== -1) {
        eMessage.push("allowed special characters: ! @ # $ % ^ & * ( ) - _");
    }

    return eMessage;
}

export default checkPasswordValidity;