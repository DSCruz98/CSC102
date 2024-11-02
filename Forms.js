// Drake Cruz 11/2/24

function strings() {
  // gets our values
  let string1 = document.getElementById("firstStr").value;

  // works its way through the word one leter at a time
  let i = 0;
  let reversed = "";
  for (i = string1.length - 1; i >= 0; i--) {
    reversed += string1[i];
    // reversed = reversed + string1[i]
  }
  // same revered
  if (reversed == string1) {
    document.getElementById("stringCheck").innerHTML = "Palindrome";
  }
  // not the same reversed
  else {
    document.getElementById("stringCheck").innerHTML = "Not a Palindrome";
  }
}

function validate() {
  // gets our names and number
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("secondName").value;
  let zipCode = document.getElementById("zipCode").value;
  // combines the names and adds a space between them
  let fullName = firstName + " " + lastName;
  // most people ive met have names within this range
  if (fullName.length <= 5 || fullName.length >= 25) {
    document.getElementById("inputStatus").innerHTML = "Name Invalid";
  }
  //   guarantees a 5 digit number
  if (zipCode > 100000 || zipCode < 10000) {
    document.getElementById("inputStatus").innerHTML = "ZIP Invalid";
  }
  //   there is probably a better way to do this
  if (
    zipCode < 100000 &&
    zipCode > 10000 &&
    fullName.length >= 5 &&
    fullName.length <= 25
  ) {
    //   if final output is valid
    document.getElementById("inputStatus").innerHTML = "Congratulations";
  }
}
