const fixnumber = (num, callback) => {
  const number = String(num);
  const seperated = string.split("");
  let count = 0;
  let newstring = "";
  for (let i = 0; i <= seperated.length; i++) {
    newstring += seperated.pop();
    count++;
    if (count === 3) {
      newstring += ",";
      count = 0;
    }
    newstring = newstring.split("").reverse().join("");
    return newstring;
  }
};
module.exports = { fixnumber };
