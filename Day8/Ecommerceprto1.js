let products=[
    {id:1,
    name:"Blazzers",
     size:"L",
    color:"Black & White",
     price:1000,
    image:"product3.jpg",
    description:"Good Looking Black Blazzers"},


    {id:2,
    name:"sweat-Tshirt-ramen",
    size:"M",
   color:"White",
    price:1500,
   image:"product4.jpg",
   description:"Good Lookin White Tshirt"
    },

    {id:3,
    name:"Hoodies",
    size:"M",
   color:"Printed",
    price:800,
   image:"product2.jpg",
   description:"Good Looking Printed Hoodies"
    },

    {id:4,
    name:"Full Dress",
    size:"L",
   color:"Gray & Red",
    price:1200,
   image:"product5.jpg",
   description:"Nice Looking Dress"
    },

    {id:5,
    name:"Salavar",
    size:"L",
   color:"Violet",
    price:1400,
   image:"product6.jpg",
   description:"Nice Looking Violet Dress"
    },


    {id:6,
    name:"Patiyala",
    size:"L",
   color:"Pink",
    price:1300,
   image:"product1.jpg",
   description:"Good Looking Pink Patiyala"
    },
    {id:7,
    name:"T-Shirt & Jeans",
    size:"L",
   color:"Gray",
    price:2000,
   image:"product7.jpg",
   description:"Good Looking Full Setup"},


   {id:8,
    name:"Blazzers",
   size:"M",
  color:"Gray $ White",
   price:2500,
  image:"product8.jpg",
  description:"Good Looking Gray Blazzers"
   },

   {id:9,
    name:"Men Full Jacket",
   size:"M",
  color:"Black",
   price:3000,
  image:"product9.jpg",
  description:"Good Looking Men Season Style "
   },

   {id:10,
    name:"Top Dress",
   size:"M",
  color:"Printed Colors",
   price:1200,
  image:"product10.jpg",
  description:"Nice Looking Top"
   },

   {id:11,
    name:"Top & Jeans",
   size:"M",
  color:"Navi Blue",
   price:2400,
  image:"product11.jpg",
  description:"Nice Looking Dress For Girls"
   },


   {id:12,
    name:"Blazzers",
   size:"L",
  color:"Pink",
   price:6000,
  image:"product12.jpg",
  description:"Good Looking Blazzers For Girls"
   },
]

Cart= []
let srno=0;
function displayProducts(productsdata,who="productwrapper"){
    let productsStrings="";
    
 productsdata.forEach(function(product,index)
 {
        let {id,name,image,color,description,price,size} = product;
    if(who=='productwrapper'){
     productsStrings+=`  <div class="product">
    <div class="prodimg">
       <img src="${image}" width="100%" />
     </div>
     <h3>Name:${name}</h3>
     <p>Price:${price}</p>
     <p>Size:${size}</p>
     <p>Colour${color}</p>
     <p>Discription${description}</p>
     <p>
         <button onclick="addCart(${id})">Add To Cart</button>
     </p>
    </div>`;
    
    // let Count="";
    //   Count==srno
      document.getElementById("count").innerText+=srno
    srno++
   }
    else if(who=='cart')
    {
        productsStrings+=`  <div class="product">
        <div class="prodimg">
           <img src="${image}" width="100%" />
         </div>
         <h3>Nmae :${name}</h3>
         <p>Price :${price}</p>
         <p>Size :${size}</p>
         <p>Colour :${color}</p>
         <p>Discription :${description}</p>
         <p>
             <button onclick=" removefromCart(${index})">Remove From Cart</button>
         </p>
        </div>`;
    }  
    });

    document.getElementById(who).innerHTML=productsStrings; //document.getElementById(productwrapper).innerHTML=productsStrings
}
displayProducts(products);

// function searchProduct(){
//    let searchValue=document.getElementById('searchValue').value;
//   // console.log(searchValue)
// }

// another way to search
function searchProduct(searchValue){
    console.log(searchValue);
    let searchProducts= products.filter(function(product){
        let seacrhString= product.name+" "+product.name+" "+product.color
       return seacrhString.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
   })
    displayProducts(searchProducts);
}
// searchMax
function searchMax(){
      let minPrice=document.getElementById("min").value
      let maxPrice=document.getElementById("max").value
    let searchMaxprice=products.filter(function(prices){
        return prices.price>=minPrice && prices.price<=maxPrice
       
    });
    displayProducts(searchMaxprice)
    
}

// add prodct to cart

function addCart(index){
   Cart.push(products[index]);
   displayProducts(Cart,"cart");       // i write insted of displayProducts(Product,who);
}


function removefromCart(index){
  Cart.splice(index,1)
  displayProducts(Cart,"cart");
 }