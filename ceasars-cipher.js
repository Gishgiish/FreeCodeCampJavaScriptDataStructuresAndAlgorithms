function rot13(str) {
  const decoded = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (/[A-Z]/.test(char)) {
      const decodedChar = String.fromCharCode(
        ((char.charCodeAt(0) - "A".charCodeAt(0) + 13) % 26) + "A".charCodeAt(0)
      );
      decoded.push(decodedChar);
    } else {
      decoded.push(char);
    }
  }
  return decoded.join("");
}

rot13("SERR PBQR PNZC");
