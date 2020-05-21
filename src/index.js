const darkBgColor = 'hsl(230, 17%, 14%)'
const darkCardBgColor = 'hsl(228, 28%, 20%)'
const $toggleButton = document.getElementById('toggleButton')
const $card = document.querySelectorAll('.card')
const $body = document.body
const $bigCard = document.querySelectorAll('.bigCard')

function switchColor (){
  if($body.classList.contains('darkMode')){
    $body.classList.remove('darkMode')
    $card.forEach((card, i) => {
      card.classList.remove('card-darkMode')
    })
    $bigCard.forEach((bigCard, i) => {
      bigCard.classList.remove('bigCard-darkMode')
    })
  }else{
    $body.classList.add('darkMode')
    $card.forEach((card, i) => {
      card.classList.add('card-darkMode')
    })
    $bigCard.forEach((bigCard, i) => {
      bigCard.classList.add('bigCard-darkMode')
    })

  }
}
$toggleButton.addEventListener('change', switchColor)
