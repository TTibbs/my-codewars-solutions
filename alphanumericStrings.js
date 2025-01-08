const alphanumeric = (string) => {
  if (string.length < 2) return "String must be longer than 1 character";
  /* '^' Asserts the start of the string
       [a-zA-Z0-9] matches any sequence of characters that's A-Z or digits
       '$' asserts the end of the string
       'i' makes the regex case insensitive
    */
  return /^[a-zA-Z0-9]+$/i.test(string);
};

module.exports = alphanumeric;
