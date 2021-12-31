function validatePIN(pin) {
  const length = pin.length;
  const isANumber = /^\d+$/.test(pin);
  if (isANumber && (length === 4 || length === 6)) {
    return true;
  }
  return false;
}

console.log(validatePIN("-1.234"));
