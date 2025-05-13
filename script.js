function validEmail(str) {
    // Check for empty string
    if (!str) return false;
    
    // Regular expression for email validation
    // - Starts with one or more alphanumeric characters, dots, or hyphens
    // - Followed by @ symbol
    // - Followed by one or more alphanumeric characters or hyphens
    // - Followed by a dot
    // - Ends with 2-3 alphanumeric characters (domain extension)
    const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
    
    return emailRegex.test(str);
}

// Do not change the code below.
//const str = prompt("Enter an email address.");
//alert(validEmail(str));
