// This function checks if a credit card number is valid and tells you what type it is
function checkCreditCard(thecardNumber) 
{
    // A way to identify different types of credit cards
    const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const masterCardPattern = /^5[1-5][0-9]{14}$/;
    const americanexpressPattern = /^3[47][0-9]{13}$/;
    const discoverPattern = /^6(?:011|5[0-9]{2})[0-9]{12}$/;

    // To check which pattern matches the card number
    if (visaPattern.test(thecardNumber)) {
        return "Nice Visa Card😉.";
    } else if (masterCardPattern.test(thecardNumber)) {
        return "Nice MasterCard😉.";
    } else if (americanexpressPattern.test(thecardNumber)) {
        return "Nice American Express Card😉.";
    } else if (discoverPattern.test(thecardNumber)) {
        return "Nice Discover Card😊.";
    } else {
        return "Ooh shit sorry not a valid card number😞.Try another one."; 
    }
}

// Here are some card numbers to test the functions
const cardNumbersToTest = [
    "4111111111111111", 
    "5500000000000004",
    "340000000000009",  
    "6011000000000004",
    "1236567890123456"
];

// A simple loop through each card and print out what type it is
for (let i = 0; i < cardNumbersToTest.length; i++) 
    {
    const result = checkCreditCard(cardNumbersToTest[i]);
    console.log(`Card Number: ${cardNumbersToTest[i]} -> ${result}`);
}
