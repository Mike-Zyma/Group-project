// <!-- Initialize Swiper -->

const swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: '.swiper-pagination'
  }
})

const $sw = document.getElementsByClassName('swiper-wrapper')
const $imgs = $sw[0].getElementsByTagName('img')
for (const $img of $imgs) {
  $img.addEventListener('mouseover', function (e) {
    try {
      const $src = e.target.currentSrc
      const $title = e.target.nextElementSibling.children[0].textContent
      const $desc = e.target.nextElementSibling.children[1].textContent
      const $price = e.target.nextElementSibling.children[2].textContent
      const $imgBoxImg = document.getElementsByClassName('imgBoxImg')[0]
      const $text = document.getElementsByClassName('text')[0]
      $imgBoxImg.src = $src
      $text.children[0].textContent = $title
      $text.children[1].textContent = $desc
      $text.children[2].textContent = $price
    } catch (err) {
      console.log(err)
    }
  })
}

const $cart = document.getElementById('cart_icon')
const $hist = document.getElementById('virtualCart')

$cart.addEventListener('click', function (e) {
  let $history = []

  // const $details = document.getElementById('paintingDetails')
  // const $name = $details.children[0].textContent
  // const $desc = $details.children[1].textContent
  // const $price = $details.children[2].textContent
  const $name = e.target.parentElement.children[0].textContent
  const $desc = e.target.parentElement.children[1].textContent
  const $price = e.target.parentElement.children[2].textContent
  // const $imgBoxImg = document.getElementsByClassName('imgBoxImg')[0]
  const $img = document.getElementsByClassName('imgBoxImg')[0].src

  const obj = { name: $name, descr: $desc, price: $price, img: $img }
  if (Object.keys(localStorage).includes('history')) {
    $history = localStorage.getItem('history')
    $history = JSON.parse($history)
  }

  $history.push(obj)
  $history = JSON.stringify($history)
  localStorage.setItem('history', $history)
})

function hover (img) {
  img.src = 'images/logoInverse.gif'
}
function hoverOut (img) {
  img.src = 'images/logo small.gif'
}
