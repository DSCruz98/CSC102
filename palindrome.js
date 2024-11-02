function strings()
{
    // gets our values
let string1 = document.getElementById("firstStr").value;
let string2 = document.getElementById("secondStr").value;

// works its way through the word one leter at a time
let i=0;
let reversed = "";
for (i = string1.length-1;i>=0; i--)
{
reversed += string1[i]; 
// reversed = reversed + string1[i]
}
// same reversed
if (reversed == string1)
{
    document.getElementById("stringCheck").innerHTML = "Palindrome"
}
// not the same reversed
else
{
    document.getElementById("stringCheck").innerHTML = "Not a Palindrome"
}


}

