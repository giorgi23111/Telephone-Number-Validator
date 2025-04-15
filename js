const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const getPhon = input => {
if (input === ""){
  alert("Please provide a phone number")
  return
}
 const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`)


  const pTag = document.createElement('p');
  pTag.className = 'results-text';
  
  pTag.appendChild(
    document.createTextNode(
      `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
    )
  );
  resultsDiv.appendChild(pTag);
}


checkBtn.addEventListener("click", () => {
  getPhon(userInput.value);
  userInput.value = ""
})

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = ""
})
