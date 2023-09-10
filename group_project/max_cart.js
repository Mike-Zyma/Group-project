const cart = []

function addToCart () {
  const $itemName = document.querySelector('h2').textContent
  const $itemDesc = document.querySelector('h3').textContent
  const $itemPrice = document.querySelector('h1').textContent

  const $cartItem = {
    name: $itemName,
    desc: $itemDesc,
    price: $itemPrice,
    qty: 1
  }

  cart.push($cartItem)
  localStorage.setItem('list', JSON.stringify(cart))

  alert('Item added to cart')
}
function displayItems () {
  const $cartContainer = document.querySelector('#cart-list')
  const $data = localStorage.getItem('list')
  const cart = JSON.parse($data)
  cart.forEach(item => {
    const $container = document.createElement('div')
    $container.classList.add('item')
    const $itemName = document.createElement('h2')
    $itemName.textContent = item.name
    const $itemPrice = document.createElement('p')
    $itemPrice.textContent = item.price
    const $qty = document.createElement('p')
    $qty.textContent = `Quantity: ${item.qty}`

    $container.appendChild($itemName)
    $container.appendChild($itemPrice)
    $container.appendChild($qty)

    $cartContainer.appendChild($container)
  })
}
displayItems()
