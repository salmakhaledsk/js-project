//  let productsInCart = localStorage.getItem("productsInCart")
//  let allProducts = document.querySelector(".products")

// if(productsInCart){
//     let item= JSON.parse(productsInCart) 
//     drawCartProducts(item)

// }
// function drawCartProducts(item){
//     const displayItem = (items) => {
//         document.getElementById('root').innerHTML = items.map((item) => {
//             var { image, title, price } = item;
//             return (
//                 `
//                 <div class='box'>
                
//                     <div class='img-box'>
//                         <img class='images' src=${image}></img>
//                     </div> 
//                     <div class='bottom'>
//                         <p>${title}</p>
//                         <h2>$ ${price}.00</h2>
//                         <div class="product-item-action">
//                         <button class="add-to-cart" onClick ="removeFromCart(${item.id})">Remove From Cart Cart</button>
                        
//                     </div>
                    
//                     </div>
                   
                    
//                 </div>`
//             )
//         }).join('')
//     };
 
//     allProducts.innerHTML=displayItem
    
// }
let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
let allProducts = document.querySelector(".products");

if (productsInCart) {
    const x = productsInCart.map((item) => {
        return `
            <div class='box'>
                <div class='img-box'>
                    <img class='images' src="${item.image}" alt="${item.title}"></img>
                </div>
                <div class='bottom'>
                    <p>${item.title}</p>
                    <h2>$ ${item.price}.00</h2>
                    <div class="product-item-action">
                        <button class="add-to-cart" onClick="removeFromCart(${item.id})">Remove From Cart</button>
                    </div>
                </div>
            </div>`;
    });

    allProducts.innerHTML = x.join(''); 
} else {
    allProducts.innerHTML = "Your cart is empty.";
}







var add =document.querySelector(".add-to-cart")
var content = document.querySelector("#content")
var totalspace = document.querySelector("#totalspace")
var btn = document.querySelector("#btn1")
var Total= 0

add.forEach(function(item){
    item.onclick = function(){
        Total += +(item.getAttribute("price"))
        content.innerHTML += item.textContent +"...." 

        if(content.innerHTML !=""){
            btn.style.display="block"
        }
    }
})
btn.onclick = function(){
  
    document.getElementById("totalspace").innerHTML=Total
    console.log(Total)
}
