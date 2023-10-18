
let userInfo = document.querySelector("#user_info")
let userData = document.querySelector("#user")
let links = document.querySelector("#links")

if(localStorage.getItem("firstname")){
    links.remove()
    userInfo.style.display = "flex"
    userData.innerHTML= localStorage.getItem("firstname")
}
else{

}
let logOutBtn = document.querySelector("#logout")

logOutBtn.addEventListener("click", function(){
    localStorage.clear()
    setTimeout(()=>{
        window.location = "login.html"
    } , 1500 )
    // logOutBtn.style.display="hidden"
})
const product = [
    {
        id: 1,
        image: 'images/KM0010111001044principale_900Wx900H-removebg-preview.png',

        title: 'Foundation',
        price: 200,
    },
    {
        id:2,
        image: 'images/top-view-lipstick-with-brush-removebg-preview.png',
        title: 'Sheer lipstick ',
        price: 120,
    },
    {
        id: 3,
        image: 'images/top-view-powders-arrangement-removebg-preview.png',
        title: 'blusher',
        price: 220,
    },
    {
        id: 4,
        image: 'images/Screenshot_2023-10-07_003127-removebg-preview.png',
        title: 'Eyeliner',
        price: 107,
    },
    {
        id: 5,
        image: 'images/top-view-black-mascara-with-grey-background-removebg-preview.png',
        title: 'Mescara',
        price: 300,
    },
    {
        id: 6,
        image: 'images/KM000000378001Bprincipale_900Wx900H-removebg-preview.png',
        title: 'Eyeshadow stick ',
        price: 170,
    },
    {
        id:7 ,
        image: 'images/26243-removebg-preview.png',
        title: 'Mescara',
        price: 88,
    },
    {
        id: 8,
        image: 'images/1092-removebg-preview.png',
        title: 'Lipliner',
        price: 100,
    },
    {
        id: 9,
        image: 'images/Screenshot_2023-10-07_002509-removebg-preview.png',

        title: 'Foundation',
        price: 300,
    },
    
    
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});



const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, price } = item;
        return (
            `
            <div class='box'>
            <i class="fas fa-heart"></i>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>
                    <div class="product-item-action">
                    <button class="add-to-cart" onClick ="addtocart(${item.id})">Add To Cart</button>
                    
                </div>
                
                </div>
               
                
            </div>`
        )
    }).join('')
};
displayItem(categories);



let cartProductDiv=document.querySelector(".carts_products div")
let badge = document.querySelector(".badge")

// let addedItem = [];
let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) :[]

 if(addedItem){
    addedItem.map(item => {
        cartProductDiv.innerHTML += `<p>${item.title}</p>`;
    })
    badge.style.display="block"
    badge.innerHTML=addedItem.length
 }

    if(localStorage.getItem=("firstname")){
        function addtocart(id){
            let choosenItem=product.find((item) => item.id === id);
            cartProductDiv.innerHTML += `<p>${choosenItem.title} </p>`


            addedItem = [...addedItem,choosenItem]
            localStorage.setItem("productsInCart",JSON.stringify(addedItem) )

            let cartproductsLengh = document.querySelectorAll(".carts_products div p")
            // console.log(cartproductsLengh.length)
            badge.style.display="block";
            badge.innerHTML = cartproductsLengh.length; 
            }
    }
    else{
        window.location= "login.html"
    }

   


// ////////////////////////////////////////////
let shoppingCartIcon = document.querySelector(".shopping-cart") 
let cartsProducts = document.querySelector(".carts_products")
shoppingCartIcon.addEventListener("click", opencart ) 

function opencart(){
   if(cartProductDiv.innerHTML != ""){
    if(cartsProducts.style.display=="block"){
        cartsProducts.style.display="none"
    }
    else{
        cartsProducts.style.display="block"
    }
   }
}


