const select = document.querySelector('.cx-select')
const inputSelect = document.querySelector('#ipt-1')
const containerOptions = document.querySelector('#nav-options')
const icons = document.querySelectorAll('.icon-select')
const Options = document.querySelectorAll('[data-select]')

select.addEventListener('click', openSelect)

const open = x => containerOptions.classList.toggle('disabled-select')


function checkSelect(value, element){
    if(value == '' || element == 0){
        icons[0].classList.remove('disabled-select')
        icons[1].classList.add('disabled-select')
    } else {
        icons[1].classList.remove('disabled-select')
        icons[0].classList.add('disabled-select')
    }
}

function openSelect({ target }){
    open()
    checkSelect(0, 0)
    Options.forEach( options => options.addEventListener('click', setOptions))    
}

function setOptions({ currentTarget }){
  const optionValue = currentTarget.getAttribute('data-select')
  console.log(typeof optionValue)
  inputSelect.value = optionValue
  open()
  checkSelect(optionValue)
}