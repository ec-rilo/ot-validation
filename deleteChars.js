function deleteChars(index, deleteCount, str) {
  if (index < 0) return str;
  const firstHalf = str.slice(0, index);
  const secondHalf = str.slice(index + deleteCount);
  return firstHalf + secondHalf;
}

export default deleteChars;
