// document.addEventListener('DOMContentLoaded', function () {
//     // Selecting the result input field
//     const resultField = document.getElementById('result');

//     // Selecting all buttons
//     const buttons = document.querySelectorAll('#calcu input[type="button"]');

//     // Adding click event listener to each button
//     buttons.forEach(button => {
//         button.addEventListener('click', function () {
//             // Getting the value of the clicked button
//             const value = this.value;

//             // Checking for special cases
//             if (value === '=') {
//                 try {
//                     // If '=' is clicked, evaluate the expression
//                     resultField.value = eval(resultField.value);
//                 } catch (error) {
//                     resultField.value = 'Error';
//                 }
//             } else if (value === 'c') {
//                 // If 'c' is clicked, clear the result field
//                 resultField.value = '';
//             } else {
//                 // For other buttons, append the value to the result field
//                 resultField.value += value;
//             }
//         });
//     });

//     // Handling keyboard input
//     document.addEventListener('keypress', function (event) {
//         // Getting the pressed key
//         const key = event.key;

//         // Allowed keys: 0-9, +, -, *, /, ., =, Enter, Backspace
//         const allowedKeys = '0123456789+-*/.=\r\b';

//         if (allowedKeys.includes(key)) {
//             // Handling special cases
//             if (key === '=' || key === '\r') {
//                 try {
//                     // If '=' or 'Enter' is pressed, evaluate the expression
//                     resultField.value = eval(resultField.value);
//                 } catch (error) {
//                     resultField.value = 'Error';
//                 }
//             } else if (key === 'c' || key === '\b') {
//                 // If 'c' or 'Backspace' is pressed, clear the result field
//                 resultField.value = '';
//             } else {
//                 // For other keys, append the key to the result field
//                 resultField.value += key;
//             }

//             // Prevent default behavior of keys
//             event.preventDefault();
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    
})