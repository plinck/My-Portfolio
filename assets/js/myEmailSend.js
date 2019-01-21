"use strict";

// Email.send({
//     Host : "smtp25.elasticemail.com",
//     Username : "paul.linck@gmail.com",
//     Password : "c8c28cc4-8d1b-4a2a-8bdb-796369995e2c",
//     To : 'paul.linck@gmail.com',
//     From : "paul.linck@gmail.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );

Email.send({
    SecureToken : "C973D7AD-37aa2abc-c7ed-4e62-93a4-58440aa5bfef-4B95-91F4-40ABC5567812",
    To : 'paul@linck.net',
    From : "paul.linck@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);