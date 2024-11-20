function vigenereCipher(text, key, encode = true) {
    const shift = encode ? 1 : -1;
    const keyLength = key.length;
    let result = '';
    let keyIndex = 0;
  
    for (let char of text) {
      const isUpper = char >= 'A' && char <= 'Z';
      const isLower = char >= 'a' && char <= 'z';
  
      if (isUpper || isLower) {
        const base = isUpper ? 65 : 97;
        const charCode = char.charCodeAt(0);
        const keyCharCode = key[keyIndex % keyLength].toLowerCase().charCodeAt(0) - 97;
        const newCharCode = (charCode - base + shift * keyCharCode + 26) % 26 + base;
        result += String.fromCharCode(newCharCode);
        keyIndex++;
      } else {
        result += char; // Non-alphabetic characters are added as-is
      }
    }
    return result;
  }
  
  document.getElementById('encodeBtn').addEventListener('click', () => {
    const text = document.getElementById('text').value;
    const key = document.getElementById('key').value;
    if (!key) {
      alert('Please enter a key!');
      return;
    }
    const encoded = vigenereCipher(text, key, true);
    document.getElementById('result').textContent = encoded;
  });
  
  document.getElementById('decodeBtn').addEventListener('click', () => {
    const text = document.getElementById('text').value;
    const key = document.getElementById('key').value;
    if (!key) {
      alert('Please enter a key!');
      return;
    }
    const decoded = vigenereCipher(text, key, false);
    document.getElementById('result').textContent = decoded;
  });