READ ME

cart.js is the script that creates the functional add to cart button, clicking the button saves the users choice to the local storage
cart.html is the page where the cart is shown along with the price and item name (the css is ugly on this page)
max_page.html is my mug page


HOW TO ADD THE SCRIPT TO OTHER PAGES:

it is hard to explain clearly over text so if its not clear, send me a message and I will try to explain better or I can just incorperate it myself.

1. simply add the <script src "cart.js"></script> at the bottom of the HTML file.

*using blocks from the max_page.html for reference*

2. In every "displayNone" div in the "swiper-slide" div, change the <h2> tags to <p>

`<div class="swiper-slide">
        <img src="images/abi.jpg" alt="abi">
        <div class="displayNone">
          <p>Abi Mug</p>                    // this line (h2 to p)
          <p>Abi mug designed by Abby.</p>
          <p>$15</p>
        </div>` 
    
3. Once that is done, change the tags in the "paintingDetails" div so the title is <h2>, the description is <h3> and the price is <h1>

`<div id="paintingDetails" class="text">
      <h2>Abi Mug</h2>                  // change this line to h2
      <h3>Abi mug designed by Abby.</h3> // change this line to h3
      <h1 class="price">$15</h1>        // KEEP this line to h1
      <button onclick="addToCart ()">Add to Cart</button>
    </div>`

4. Finally, ensure the following blocks of code are rearranged to be in the proper order, the paintingDetails div has to be above the contactInfo div.

   `<div id="paintingDetails" class="text">
      <h2>Abi Mug</h2>
      <h3>Abi mug designed by Abby.</h3>
      <h1 class="price">$15</h1>
      <button onclick="addToCart ()">Add to Cart</button>
    </div>

    <div class="contactInfo">
      <p class="about">Each mug has been personally designed by the Art Cafe employees. Consider supporting your local cafe by purchasing a unique mug!
      </p>
      <h2 class="about">GET IN TOUCH</h2>
      <a href="mailto:ArtCafe@gmail.com" class="about">ArtCafe@gmail.com</a>
    </div>`

    


