document.querySelectorAll('.blast').forEach((el) => {
  el.addEventListener('mouseenter', function () {
    el.classList.add('rubberBand', 'animated')
    setTimeout(() => {
      el.classList.remove('rubberBand', 'animated')
    }, 1000)
  })
})

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const tel = document.getElementById('tel')
const textarea = document.getElementById('textarea')

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

//Show success outline
function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

//Check email is valid
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  return re.test(String(email).toLowerCase())
}

//event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault()

  if (username.value === '') {
    showError(username, 'Your name, please!')
  } else {
    showSuccess(username)
  }

  if (email.value === '') {
    showError(email, 'E-mail is required!')
  } else if (!isValidEmail(email.value)) {
    showError(email, 'E-mail is not valid!')
  } else {
    showSuccess(email)
  }

  if (tel.value === '') {
    showError(tel, 'Your number is required!')
  } else {
    showSuccess(tel)
  }

  if (textarea.value === '') {
    showError(textarea, 'Write me something!')
  } else {
    showSuccess(textarea)
  }
})
