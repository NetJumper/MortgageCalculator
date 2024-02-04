/*
    inputs -> name interest, loan

        <p class="client-name"></p>
        <p class="loan-amount"></p>
        <p class="int-rate"></p>

*/

let popup = document.querySelector(".popup");
let sheet = document.querySelector(".calc-sheet");
let client = document.querySelector(".client");
let interest = document.querySelector(".interest");
let loan = document.querySelector(".loan");
let downpayment = document.querySelector(".downpayment")
const submit = document.querySelector(".submit")
const results = document.querySelector(".results")
const approve = document.querySelector(".approve");

submit.addEventListener('click', e => {
  e.preventDefault()
  addName()
  addLoan()
  addInterest()
  addDownPayment()
})

approve.addEventListener('click', e => {
  e.preventDefault()
  client.value = ""
  loan.value = ""
  interest.checked = false
  downpayment.value = ""
  closePopup()
})


//FUNCTIONS
function openPopup() {
  popup.classList.add("open-popup");
  sheet.classList.add("hidden")
}
function closePopup() {
  popup.classList.remove("open-popup");
  sheet.classList.remove("hidden")

}

function addName() {
  //
  console.log(client.value)
  let div = document.createElement("div");
  div.innerHTML = client.value;
  results.appendChild(div)
  openPopup()
}
function addLoan() {
  //
  console.log(loan.value)
  let div = document.createElement("div");
  div.innerHTML = loan.value;
  results.appendChild(div)
  
}
function addInterest() {
  const selectedInterestRate = document.querySelector('input[name="interest"]:checked');
  // Create a new div element for the interest rate
  let div = document.createElement("div");
  div.classList.add('int-rate'); // Add a class for styling and identification
  div.innerHTML = selectedInterestRate ? `Interest Rate: ${selectedInterestRate.value}` : 'No rate selected';

  // Append the new div to the results
  results.appendChild(div);
}


function addDownPayment(){
  console.log(downpayment.value)
  let div = document.createElement("div");
  div.innerHTML = downpayment.value;
  results.appendChild(div)
}