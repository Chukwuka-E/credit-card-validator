The credit card validation code
The code is designed to validate credit card numbers and identify their types (Visa, MasterCard, American Express, Discover) based on specific patterns.
Function:
The main function, checkCreditCard(thecardNumber), takes a credit card number as input.
It uses regular expressions (regex) to check if the number matches the format of known card types.
If a match is found, it returns a message indicating the type of card. If no match is found, it returns a message stating that the card number is invalid.
Card Type Patterns:
Visa: Starts with 4 and has either 13 or 16 digits.
MasterCard: Starts with numbers 51 to 55 and has exactly 16 digits.
American Express: Starts with 34 or 37 and has exactly 15 digits.
Discover: Starts with 6011 or 65 and has exactly 16 digits.
OUTPUT:
![sreen shot](<Screenshot 2025-02-02 140442.png>)