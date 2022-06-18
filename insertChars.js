function insertChars(index, str, chars) {
  if (index < 0) return str;
  str = str.slice(0, index) + chars + str.slice(index);
  return str;
}

export default insertChars;
