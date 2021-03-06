"use strict";

const checkForSpam = function (message) {
  message = message.toLowerCase();
  let spamCheker = false;
  if (message.includes("spam") || message.includes("sale")) {
    spamCheker = true;
  }
  return spamCheker;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
