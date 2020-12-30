function duplicateCount(text) {
  let counts = {};
  text.toLowerCase().split('').forEach(char => {
    counts[char] ? counts[char] += 1 : counts[char] = 1;
  });
  
  return Object.values(counts).filter(count => count > 1).length;
}
