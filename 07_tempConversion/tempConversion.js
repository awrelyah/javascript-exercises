const ftoc = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5/9);
  const celsiusFixed = celsius.toFixed(1);
  return Number(celsiusFixed);
};

const ctof = function(celsius) {
  const fahrenheit = (celsius * (9/5) + 32);
  const fahrenheitFixed = fahrenheit.toFixed(1);
  return Number(fahrenheitFixed);

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
