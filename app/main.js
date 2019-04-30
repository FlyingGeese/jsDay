function depositMoney() {
  let amount = prompt('How much do you want to deposit?')
  let bal = document.querySelector('#bank-balance')
  let currentBal = bal.innerText
  let total = parseInt(currentBal) + parseInt(amount)
  bal.innerText = total
  let history = document.querySelector('#history')
  history.innerHTML += '<p>You deposited ' + amount + '</p>'
}

function withdrawMoney() {
  let amount = prompt('How much do you want to withdraw?')
  let history = document.querySelector('#history')
  let OD = document.querySelector('#odProtect')
  let bal = document.querySelector('#bank-balance')
  let currentBal = bal.innerText
  let odMessage = document.querySelector('#error-message')
  if (OD.checked == true) {
    odMessage.classList.remove('hidden')
    let total = currentBal
  } else {
    let total = parseInt(currentBal) - parseInt(amount)
    bal.innerText = total
  }
  if (total <= -1) {
    bal.classList.add('negative-balance')
  }
  history.innerHTML += '<p>You withdrew ' + amount + '</p>'
}