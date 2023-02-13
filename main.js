function xify(str) {
  newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += "x";
  }
  return newStr;
}
console.log(xify("Terrence"));

function yellingChars(char) {
  let finalStr = "";
  for (let i = 0; i < char.length; i++) {
    finalStr = finalStr + char[i] + "!";
  }
  return finalStr;
}
console.log(yellingChars("house"));
console.log(yellingChars("school"));
console.log(yellingChars("immersives"));

function indexedChars(str) {
  let indexStr = "";
  for (i = 0; i < str.length; i++) {
    indexStr = indexStr + i + str[i];
  }
  return indexStr;
}
console.log(indexedChars("hey"));
console.log(indexedChars("bye"));
console.log(indexedChars("hello"));

function exclaim(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "?" || str[i] === ".") {
      result += "!";
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log(exclaim("What are you doing? Are you a fool?"));

function truncate(str) {
  let result = "";
  if (str.length > 15) {
    for (let i = 0; i < 15; i++) {
      result += str[i];
    }
    result += "...";
  }
  return result;
}

console.log(truncate("I need a new pair of shoes"));

function ciEmailify(name) {
  let firstName = "";
  let lastName = "";
  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") {
      for (let j = 0; j < i; j++) {
        firstName += name[j];
      }
      for (let j = i + 1; j < name.length; j++) {
        lastName += name[j];
      }
    }
  }
  return firstName + "." + lastName + "@codeimmersives.com";
}
console.log(ciEmailify("Terrence Rivers"));

function reverse(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log(reverse("Terrence"));

function onlyVowels(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u" ||
      str[i] === "A" ||
      str[i] === "E" ||
      str[i] === "I" ||
      str[i] === "O" ||
      str[i] === "U"
    ) {
      result += str[i];
    }
  }
  return result;
}

console.log(onlyVowels("Terrance"))
