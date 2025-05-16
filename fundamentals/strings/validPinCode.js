const validatePIN = (pin) => {
  // Checks if pin is a string and only 4 or 6 digits
  return /^\d{4}$|^\d{6}$/.test(pin);
};

module.exports = validatePIN;
