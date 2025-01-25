// Products.jsx
import React from 'react';


import ProductList from '../components/ProductList';
import './Products.css';

//const { v4: uuidv4 } = require('uuid');

const Products = () => {
  
  const products = [
    {
      productId: "611f07c2316eaf00356fc832",
      name: "Samsung Galaxy A53 5G 8GB RAM - 128GB ROM",
      category: "Mobile Phones",
      price: 147999,
      image: "images/Samsung Galaxy A53.jpg",
    },
    {
      productId: "611f07c2316eaf00356fc833",
      name: "Samsung Galaxy A32 6GB RAM- 128GB ROM",
        category: "Mobile Phones",
        price: 88.599,
        image: "images/Samsung Galaxy A32.jpg",
    },
    {
      productId: "611f07c2316eaf00356fc834",
      
      name: "Samsung Galaxy A13 4GB RAM 128GB ROM",
      category: "Mobile Phones",
      price: 64.499,
      image: "images/Samsung Galaxy A13.jpg",
    },

    {
      productId: "611f07c2316eaf00356fc835",
      name: "Samsung Galaxy A33 5G 8GB RAM 128GB ROM",
      category: "Mobile Phones",
      price: 119.999,
      image: "images/Samsung Galaxy A33.jpg",
    },
    {
      productId: "611f07c2316eaf00356fc836",
      name: "Samsung Galaxy A04s RAM 4GB 128GB ROM",
        category: "Mobile Phones",
        price: 48.880,
        image: "images/Samsung Galaxy A04s.jpg",
    },
    {
      productId: "611f07c2316eaf00356fc837",
      name: "Samsung Galaxy A12 4GB RAM - 128GB ROM",
        category: "Mobile Phones",
        price: 48.999,
        image: "images/Samsung Galaxy A12 (1).jpg",
    },
    {
      productId: "611f07c2316eaf00356fc838",
      name: "Samsung Galaxy A14 6GB - 128GB ",
        category: "Mobile Phones",
        price: 62.999,
        image: "images/Samsung Galaxy A14.jpg",
    },
    {
      productId: "611f07c2316eaf00356fc839",
      name: "Samsung Galaxy Z Flip 4GB RAM 256 GB ROM ",
      category: "Mobile Phones",
      price: 236.499,
      image: "images/Samsung Galaxy Z Flip 4GB RAM 256 GB ROM.jpg",
    },
    {
      productId: "611f07c2316eaf00356fc840",
      name: "Xiaomi Redmi Note 12 Pro RAM 8GB ROM 256GB",
        category: "Mobile Phones",
        price: 89.740,
        image: "images/Xiaomi Redmi Note 12 pro.png",
    },
    {
      productId: "611f07c2316eaf00356fc841",
      name: "Redmi A2 Plus, 3 GB RAM 64GB ROM ",
      category: "Mobile Phones",
      price: 23.999,
      image: "images/Redmi A2 Plus, 3 GB RAM 64GB ROM.jpg",
  },
{
  productId: "611f07c2316eaf00356fc842",
      name: "Redmi Note 12 Pro , 8GB RAM 256 ROM ",
      category: "Mobile Phones",
      price: 90.999,
      image: "images/Redmi Note 12 Pro , 8GB.jpg",
  },
{
  productId: "611f07c2316eaf00356fc843",
      name: "Xiaomi Redmi A 2 Plus RAM 3 GB ROM 64 GB ",
      category: "Mobile Phones",
      price: 23.191,
      image: "images/Xiaomi Redmi A 2 Plus.png",
  },
{
  productId: "611f07c2316eaf00356fc844",
      name: "Redmi A2+ 3GB RAM 64GB ROM ",
      category: "Mobile Phones",
      price: 22.999,
      image: "images/Redmi A2+ 3GB RAM 64GB ROm.png",
},

{
  productId: "611f07c2316eaf00356fc845",
  name: "Redmi 12C 4GB RAM+ 128GB ROM",
  category: "Mobile Phones",
  price: 34.980,
  image: "images/Redmi 12C 4GB RAM+ 128GB ROM.jpg",
},
{
  productId: "611f07c2316eaf00356fc846",
  name: "Infinix Note 30 Pro 8GB + 8GB RAM - 256GB ROM",
  category: "Mobile Phones",
  price: 89.499,
  image: "images/Infinix Note 30 Pro.jpg",
},
{
  productId: "611f07c2316eaf00356fc847",
  name: "Infinix Hot 30, 8GB RAM 128GB ROM, ",
  category: "Mobile Phones",
  price: 38.999,
  image: "images/Infinix Hot 30, 8GB RAM 128GB ROM,.jpg",
},
{
  productId: "611f07c2316eaf00356fc848",
  name: "Infinix Hot 12 RAM 6 GB ROM",
  category: "Mobile Phones",
  price: 47.990,
  image: "images/Infinix Hot 12 RAM 6 GB ROM.jpg",
},
{
  productId: "611f07c2316eaf00356fc849",
  name: "Infinix Hot 30i RAM 4GB ROM 128 GB",
  category: "Mobile Phones",
  price: 39000,
  image: "images/Infinix Hot 30i RAM 4GB ROM 128 GB.jpg",
},
{
  productId: "611f07c2316eaf00356fc850",
  name: "Infinix Smart 2 GB RAM 64GB ROM ",
  category: "Mobile Phones",
  price: 27000,
  image: "images/Infinix Smart 2 GB RAM 64GB ROM.jpg",
},
{
  productId: "611f07c2316eaf00356fc851",
  name: "Infinix Smart 6 (3GB RAM 64GB ROM) ",
  category: "Mobile Phones",
  price: 38.999,
  image: "images/Infinix Smart 6 (3GB RAM 64GB ROM).jpg",
},
{
  productId: "611f07c2316eaf00356fc852",
  name: "Pack of 30 Wooden Butterflies for Your Kids Bedroom Wall Decoration",
  category: "Home Decor",
  price: 127,
  image: "images/Pack of 30 Wooden Butterflies for Your Kids Bedroom Wall Decoration.jpg",
},
{
  productId: "611f07c2316eaf00356fc853",
  name: "3d Wooden Wall Stickers English Letters Home Family Self-Adhesive Wooden",
  category: "Home Decor",
  price: 345,
  image: "images/3d Wall Stckers.jpg",
},
{
  productId: "611f07c2316eaf00356fc854",
  name: "Lifestyle Glory Brand 3D Tree With Birds On Nest Wooden Wall Art I Decorating Items",
  category: "Home Decor",
  price: 345,
  image: "images/3D Tree with Birds.jpg",
},
{
  productId: "611f07c2316eaf00356fc855",
  name: "3D Purple Mix Design Butterfly 12 pcs For Wall Decoration ",
  category: "Home Decor",
  price: 197,
  image: "images/3D Purple Mix Design.jpg",
},
{
  productId: "611f07c2316eaf00356fc856",
  name: "Dotz Brand Decoration Butterfly Wall Shelf, Decoration Candlestick",
  category: "Home Decor",
  price: 244,
        image: "images/Dotz Brand Decoration.jpg",
    },
	{
    productId: "611f07c2316eaf00356fc857",
        name: "New flawors wall art for home decore, gifts, kids room and for office ",
        category: "Home Decor",
        price: 276,
        image: "images/Flawors wall art.jpg",
    },
	{
    productId: "611f07c2316eaf00356fc858",
        name: "DUW Family Picture Frame Tree ",
        category: "Home Decor",
        price: 229,
        image: "images/Family Picyure Tree.jpg",
    },
	{
    productId: "611f07c2316eaf00356fc859",
        name: "Metal Eiffel Tower Model",
        category: "Home Decor",
        price: 149,
        image: "images/Metal Eiffel Tower Model.jpg",
    },
	{
    productId: "611f07c2316eaf00356fc860",
        name: "3pc Mirror Set",
        category: "Home Decor",
        price: 760,
        image: "images/3pc Mirror Set.jpg",
    },
	
    {
      productId: "611f07c2316eaf00356fc861",
        name: "Advanced Version Bluetooth Digital Wrist Sports Smart Watch",
        category: "Smart Watches",
        price: 1499,
        image: "images/Advanced Version Bluetooth Digital Wrist Sports Smart Watch.jpg",
    },
	 {
    productId: "611f07c2316eaf00356fc862",
    name: "D20 Bluetooth Smart Watch Men Waterproof",
        category: "Smart Watches",
        price: 950,
        image: "images/D20 Bluetooth Smart Watch Men Waterproof.jpg",
    },
	 {
    productId: "611f07c2316eaf00356fc863",
        name: "T900 Series 8 T900 Pro Ultra Smart Watch For Men",
        category: "Smart Watches",
        price: 2399,
        image: "images/T900 Series 8 T900 Pro Ultra Smart Watch For Men.jpg",
    },
	 {
    productId: "611f07c2316eaf00356fc864",
        name: "T10 Ultra Smartwatch  2.09inch HD Big Screen Magnetic Wireless Charging",
        category: "Smart Watches",
        price: 2449,
        image: "images/T10 Ultra Smartwatch  2.09inch HD Big Screen Magnetic Wireless Charging.jpg",
    },
	 {
    productId: "611f07c2316eaf00356fc865",
        name: "D20 Smartwatch Mointor D20 Y68 Bluetooth  Smart watch",
        category: "Smart Watches",
        price: 945,
        image: "images/D20 Smartwatch Mointor D20 Y68 Bluetooth  Smart watch.jpg",
    },
	 {
    productId: "611f07c2316eaf00356fc866",
        name: "i8 Pro Max Smart Watch Series 7",
        category: "Smart Watches",
        price:1549,
        image: "images/i8 Pro Max Smart Watch Series 7.jpg",
    },
	 {
    productId: "611f07c2316eaf00356fc867",
        name: "M4 LED Smart Watch, Breslet Watch, water proof",
        category: "Smart Watches",
        price: 157,
        image: "images/M4 LED Smart Watch, Breslet Watch, water proof.jpg",
    },
	
    // Add more product data here
];





 

return (

       
     <div>
    <h2>Products</h2>
    <ProductList products={products} />
  </div>
);
};


export default Products;
