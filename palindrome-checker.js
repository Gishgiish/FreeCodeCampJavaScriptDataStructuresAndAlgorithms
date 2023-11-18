function palindrome(str) {
  const cleanStr = str.replace(/[\W]/g, "").toLowerCase();
  const cleanStrWithoutUnderscore = cleanStr.replace(/_/g, "");
  const reversedStr = cleanStrWithoutUnderscore.split("").reverse().join("");
  return cleanStrWithoutUnderscore === reversedStr;
}

palindrome("eye");
