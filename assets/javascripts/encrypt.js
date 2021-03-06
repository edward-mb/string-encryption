function ArgumentError(message) {
  this.name = "ArgumentError";
  this.message = message || "ArgumentError";
  this.stack = new Error().stack;
}
ArgumentError.prototype = Object.create(Error.prototype);
ArgumentError.prototype.constructor = ArgumentError;

function encrypt(inputString) {
  var mapping = {
    a: "b",
    b: "c",
    c: "d",
    d: "e",
    e: "f",
    f: "g",
    g: "h",
    h: "i",
    i: "j",
    j: "k",
    k: "l",
    l: "m",
    m: "n",
    n: "o",
    o: "p",
    p: "q",
    q: "r",
    r: "s",
    s: "t",
    t: "u",
    u: "v",
    v: "w",
    w: "x",
    x: "y",
    y: "z",
    z: "a",
    A: "B",
    B: "C",
    C: "D",
    D: "E",
    E: "F",
    F: "G",
    G: "H",
    H: "I",
    I: "J",
    J: "K",
    K: "L",
    L: "M",
    M: "N",
    N: "O",
    O: "P",
    P: "Q",
    Q: "R",
    R: "S",
    S: "T",
    T: "U",
    U: "V",
    V: "W",
    W: "X",
    X: "Y",
    Y: "Z",
    Z: "A",
  };
  var encryptChar = function (inputChar) {
    var encryptedChar = mapping[inputChar];
    if (encryptedChar === undefined) {
      throw new ArgumentError("non-latin alphabet character encountered");
    }
    return encryptedChar;
  };
  return inputString.split("").map(encryptChar).join("");
}

function mixStrings(firstString, secondString) {
  if (!firstString && secondString) return secondString;
  if (!firstString && !secondString) return "";
  if (firstString && !secondString) return firstString;

  firstStringLength = firstString.length;
  secondStringLength = secondString.length;

  maxLength = Math.max(firstStringLength, secondStringLength);

  var mixedString = "";

  for (let i = 0; i < maxLength; i++) {
    if (i <= firstStringLength - 1) mixedString += firstString.charAt(i);
    if (i <= secondStringLength - 1) mixedString += secondString.charAt(i);
  }
  return mixedString;
}
